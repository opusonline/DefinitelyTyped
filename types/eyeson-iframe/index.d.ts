declare module "SimpleEmitter" {
    export default SimpleEmitter;
    /**
     * SimpleEmitter to register callbacks for event types
     */
    class SimpleEmitter {
        _listeners: {};
        /**
         * Register event handler for event type
         * @param {string} type - event type
         * @param {function} cb - callback function
         */
        on(type: string, cb: Function): void;
        /**
         * Remove event handler
         * @param {string} [type] - event type. if empty, all events are removed
         * @param {function} [cb] - callback function, if empty, all events for given type are removed
         */
        off(type?: string, cb?: Function): void;
        /**
         * Emit event including optional argument
         * @param {string} type - event type
         * @param {any} [arg1] - argument
         * @returns
         */
        _emit(type: string, arg1?: any): void;
    }
}
declare module "utils" {
    export function checkAccessKey(token: any): boolean;
    export function isObject(obj: any): boolean;
    export function parseOrigin(url: any): string;
    export function asyncSleep(ms: any): Promise<any>;
    export const defer: any;
}
declare module "EyesonIframe" {
    export default EyesonIframe;
    /**
     * EyesonIframe
     * @param {String|Node|HTMLElement} selector - Container element or selector string
     * @param {object} options - { accessKey ( or guest.token required!), guest: { token, locale, suggestName }, width, height, css, title, className, events }
     * @returns {EyesonIframe}
     */
    class EyesonIframe extends SimpleEmitter {
        /**
         * Current version number
         * @returns {string} - Version number
         */
        static get version(): string;
        constructor(selector: any, options: any);
        _element: Element;
        _options: any;
        features: {
            present: boolean;
            chat: boolean;
            snapshot: boolean;
        };
        _channel: any;
        _iframe: any;
        _storage: any[];
        _refTimer: any;
        _loadTimer: any;
        _authenticated: boolean;
        _inMeeting: boolean;
        _origin: string;
        status: string;
        _listener: ({ data, origin, source }: {
            data: any;
            origin: any;
            source: any;
        }) => void;
        /**
         * Present one or more files. Can be image(s) or PDF.
         * @param {Blob|Array<Blob>|FileList} files - Blob or array of blobs of image(s) or PDF
         * @returns {Promise}
         */
        present(files: Blob | Array<Blob> | FileList): Promise<any>;
        /**
         * Present PDF document
         * @param {Blob} file - Blob of type 'application/pdf'
         * @returns {Promise}
         */
        presentDocument(file: Blob): Promise<any>;
        /**
         * Send chat message
         * @param {string} message - Chat message
         * @returns {Promise}
         */
        chat(message: string): Promise<any>;
        /**
         * Create snapshot
         * @returns {Promise}
         */
        snapshot(): Promise<any>;
        reload(): Promise<void>;
        /**
         * Get injected iframe element
         * @returns {null|HTMLIFrameElement}
         */
        getIFrame(): null | HTMLIFrameElement;
        /**
         * Check current authentication state
         * @returns {boolean} isAuthenticated
         */
        isAuthenticated(): boolean;
        /**
         * Get current user meeting state
         * @returns {boolean|null} isInMeeting
         */
        isInMeeting(): boolean | null;
        /**
         * Destroy EyesonIframe instance, cleanup and remove injected iframe element
         * @returns {Promise}
         */
        close(): Promise<any>;
    }
    import SimpleEmitter from "SimpleEmitter";
}
