import React from "react"
import { ReactWidget } from '@jupyterlab/apputils'


const ArtifactComponent = (): JSX.Element => {
    return <div>
        Artifact
    </div>
}

export class ArtifactWidget extends ReactWidget {
    constructor() {
        super();
        this.addClass('jp-ReactWidget')
    }

    protected render(): JSX.Element {
        return <ArtifactComponent />
    }
}