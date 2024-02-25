
// 結果をVSCodeのビューとして表示する

import * as vscode from 'vscode';


export const display = (result: string) => {
  const panel = vscode.window.createWebviewPanel(
    'progate-path-task-preview',
    'Progate Path Task Preview',
    vscode.ViewColumn.One,
    {
      enableScripts: true
    }
  );

  panel.webview.html = result;
}