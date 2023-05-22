import React from 'react';
export interface PluginDef {
    name: string;
    versions: {
        v3: string;
        v2?: string;
    };
    sanityExchangeUrl?: string;
}
export interface IncompatiblePluginsProps {
    plugins: PluginDef[];
}
export declare function IncompatiblePlugins(props: IncompatiblePluginsProps): React.JSX.Element;
