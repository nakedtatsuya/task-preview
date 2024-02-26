// 結果をVSCodeのビューとして表示する

import * as vscode from "vscode";

type displayConfig = {
	context: vscode.ExtensionContext;
	currentPanel?: vscode.WebviewPanel;
};

export const display = (
	result: string,
	{ context, currentPanel }: displayConfig,
) => {
	if (currentPanel) {
		const columnToShowIn = vscode.window.activeTextEditor
			? vscode.window.activeTextEditor.viewColumn
			: undefined;
		// If we already have a panel, show it in the target column
		currentPanel.reveal(columnToShowIn);
		return;
	}

	const panel = vscode.window.createWebviewPanel(
		"progate-path-task-preview",
		"Progate Path Task Preview",
		vscode.ViewColumn.One,
		{
			enableScripts: true,
		},
	);

	panel.webview.html = result;
	panel.onDidDispose(() => {}, null, context.subscriptions);
};
