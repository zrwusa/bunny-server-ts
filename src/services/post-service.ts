import {databaseResponseTimeHistogram} from '../helpers/metrics';
import {PostEntity} from '../entities/post-entity';
import {FindOptionsWhere} from 'typeorm';

export async function createPost(input: Partial<PostEntity>) {
    const metricsLabels = {
        operation: 'createPost',
    };
    const post = PostEntity.create(input);
    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await PostEntity.save(post);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findPost(
    query: Pick<FindOptionsWhere<PostEntity>, 'id'>
) {
    const metricsLabels = {
        operation: 'findPost',
    };

    const timer = databaseResponseTimeHistogram.startTimer();
    try {
        const result = await PostEntity.findOneBy(query);
        timer({...metricsLabels, success: 'true'});
        return result;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}

export async function findAndUpdatePost(query: Pick<PostEntity, 'id'>, update: Partial<PostEntity>) {
    return PostEntity.save({...update, ...query} as PostEntity);
}

export async function deletePost(query: Pick<PostEntity, 'id'>) {
    return await PostEntity.delete({...query});
}


export async function findPosts(query: Partial<{ from: number, offset: number }>) {
    const metricsLabels = {
        operation: 'findPosts',
    };
    const {from, offset} = query;
    const timer = databaseResponseTimeHistogram.startTimer();
    try {

        const posts = PostEntity.find();
        timer({...metricsLabels, success: 'true'});
        return posts;
    } catch (e) {
        timer({...metricsLabels, success: 'false'});
        throw e;
    }
}
