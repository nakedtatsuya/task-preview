// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode from "vscode";
import { display } from "./lib/display";
import { readProject } from "./lib/project_reader";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Track the current panel with a webview
	const currentPanel: vscode.WebviewPanel | undefined = undefined;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "progate-path-task-preview" is now active!',
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand(
		"progate-path-task-preview.helloWorld",
		() => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage(
				"HogeHoge Hello World from progate_path_task_preview!",
			);
		},
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const displayCommand = vscode.commands.registerCommand(
		"progate-path-task-preview.display",
		() => {
			const activeEditor = vscode.window.activeTextEditor;
			if (activeEditor) {
				const filePath = activeEditor.document.uri.fsPath;
				const task = readProject(filePath);
				vscode.window.showInformationMessage(
					`Current file path is: ${filePath}`,
				);
				// The code you place here will be executed every time your command is executed
				// Display a message box to the user
				display(task.id, { context, currentPanel });
			} else {
				vscode.window.showInformationMessage("No file is currently active.");
			}
		},
	);

	context.subscriptions.push(disposable, displayCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
