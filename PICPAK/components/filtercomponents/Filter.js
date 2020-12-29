// @flow
import React from "react";
import {Shaders, Node} from "gl-react";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const shaders = Shaders.create({
    Brannan: {
        frag: `...`
    }
});

export default class Brannan extends React.Component {
    render() {
        const {on, children: inputImageTexture} = this.props;
        // If the filter is disabled, it's a passthrough 
        if (!on) {
            return this.props.children;
        }
        return (
            <Node
                shader={shaders.Brannan}
                uniforms={{
                    inputImageTexture,
                    inputImageTexture2: resolveAssetSource(require("./images/brannanProcess.png")),
                }}
            />
        );
    }
}