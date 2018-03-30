import { Jobs, Response } from '../index';

/**
 *
 */
export default interface devModePlugin {
    /**
     *
     * @param currentResponse
     */
    afterResponse(currentResponse: Response): any;

    /**
     *
     * @param err
     */
    onError(err: Error): void;

    /**
     *
     * @param currentJobs
     */
    prepareRequest(currentJobs: Jobs): Jobs;

    /**
     *
     * @param jobs
     */
    willSendRequest(jobs: Jobs): void;
}
