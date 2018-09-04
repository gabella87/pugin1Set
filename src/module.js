import { PanelCtrl } from 'grafana/app/plugins/sdk'; // will be resolved to app/plugins/sdk

import './css/panel.base.scss';

class Ctrl extends PanelCtrl {

  constructor($scope, $injector) {
    super($scope, $injector);
  }

  link(scope, element) {
    this.initStyles();
  }

  initStyles() {
    window.System.import(this.panelPath + 'css/panel.base.css!');
  }

  get panelPath() {
    if (this._panelPath === undefined) {
      this._panelPath = `/public/plugins/${this.pluginId}/`;
    }
    return this._panelPath;
  }
  
}

Ctrl.templateUrl = 'partials/pehachepe.php';

export { Ctrl as PanelCtrl }
