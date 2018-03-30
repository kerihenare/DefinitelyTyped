// Type definitions for hypernova-client 1.1
// Project: https://github.com/airbnb/hypernova-node
// Definitions by: Josh Perez <https://github.com/goatslacker>
//                 Keri Henare <https://github.com/kerihenare>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace HypernovaClient {
    interface Data {
        [key: string]: any;
    }

    interface Jobs {
        [name: string]: any;
    }

    interface Response {
        [name: string]: {
            name: string;
            html: string;
            meta: {
                [key: string]: any;
            };
            duration: number;
            statusCode: number;
            success: boolean;
            error: null | Error;
            job: {
                name: string;
                data: Data
            };
        };
    }

    interface Plugin {
        /**
         *
         * @param name
         * @param data
         */
        getViewData?(name: string, data: any): Data;

        /**
         *
         * @param currentJobs
         * @param originalJobs
         */
        prepareRequest?(currentJobs: Jobs, originalJobs?: Jobs): Jobs;

        /**
         *
         * @param jobs
         */
        shouldSendRequest?(jobs: Jobs): boolean;

        /**
         *
         * @param jobs
         */
        willSendRequest?(jobs: Jobs): void;

        /**
         *
         * @param currentResponse
         * @param originalResponse
         */
        afterResponse?(currentResponse: Response, originalResponse?: Response): any;

        /**
         *
         * @param jobs
         */
        onSuccess?(jobs: Jobs): void;

        /**
         *
         * @param err
         * @param jobs
         */
        onError?(err: Error, jobs: Jobs): void;
    }

    interface RendererOptions {
        url?: string;
        plugins?: ReadonlyArray<Plugin>;
        config?: {
            timeout?: number;
            headers?: {
                [key: string]: string;
            };
        };
    }
}

/**
 *
 */
declare class HypernovaClient {
    /**
     *
     * @param options
     */
    constructor(options?: HypernovaClient.RendererOptions);

    /**
     *
     * @param plugin
     */
    addPlugin(plugin: HypernovaClient.Plugin): void;

    /**
     *
     * @param data
     */
    render(data: HypernovaClient.Jobs): Promise<string | HypernovaClient.Response>;
}

export = HypernovaClient;
