import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import { ILauncher } from '@jupyterlab/launcher';
import { reactIcon } from '@jupyterlab/ui-components';
import { ArtifactWidget } from './components/artifact'
import {  MainAreaWidget } from '@jupyterlab/apputils';


namespace CommandIDs {
  export const create = 'create-react-widget'
}

const extension: JupyterFrontEndPlugin<void> = {
  id: 'artifact-widget',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    const { commands } = app;
    const command = CommandIDs.create;
    commands.addCommand(command, {
      caption: 'Creating artifact widget',
      label: 'Artifact',
      icon: reactIcon,
      execute: () => {
        const content = new ArtifactWidget();
        const widget = new MainAreaWidget<ArtifactWidget>({content});
        widget.title.label = 'Artifacts';
        widget.title.icon = reactIcon;
        app.shell.add(widget, 'main');
      }
    });

    if (launcher) {
      launcher.add({
        command,
      })
    }

  }

}

export default extension;
