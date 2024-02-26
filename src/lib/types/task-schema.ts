/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * タスクのNanoID
 */
export type NanoId = string;
/**
 * 21文字のNanoId
 */
export type NanoId1 = string;
/**
 * 制作した組織の名前
 */
export type I18NKey = string;
/**
 * localizeされた文言の翻訳ファイル内のキー
 */
export type I18NKey1 = string;
/**
 * localizeされたテキストファイルへの相対パス。現在はマークダウンファイルのみサポートされている。末尾の`_${locale}.md`は省略する。`./`か`../`で始まる。
 */
export type I18NFileLocationPrefix = string;
/**
 * Item(TaskItem, SpecItemなど)が選択されている際にURLハッシュで使われる値。全てのItem内でユニークである必要がある。
 */
export type AnchorLink = string;
/**
 * localizeされたテキストファイルへの相対パス。現在はマークダウンファイルのみサポートされている。末尾の`_${locale}.md`は省略する。`./`か`../`で始まる。
 */
export type I18NFileLocationPrefix1 = string;
/**
 * draft -> active -> deprecated -> closed の順に進む。不可逆。
 * 1. draft: 下書き状態、まだユーザーには見えない。
 * 2. active: ユーザーに公開+推奨されている。
 * 3. deprecated: 公開されているが、非推奨のタスク。内容が古かったり、同様の内容の新しいactiveなタスクがリリースされている場合に使う。一定期間経過後にclosedに変更される。
 * 4. closed: 基本情報のみ公開されているが、submit/downloadはできない古いタスク。
 */
export type LifecycleStage = "draft" | "active" | "deprecated" | "closed";

/**
 * タスク
 */
export interface Task {
	id: NanoId;
	situationId: NanoId1;
	type:
		| TaskTypeEnvironmentSetup
		| TaskTypeStudy
		| TaskTypePractical
		| TaskTypeCommunity;
	organization: {
		/**
		 * どの属性の組織がタスクを制作したかを表す
		 */
		type: "official" | "community" | "company";
		name: I18NKey;
	};
	title: I18NKey1;
	/**
	 * 翻訳ファイルへの相対パスの配列
	 */
	translationFiles: string[];
	menu: Menu;
	explainer: I18NFileLocationPrefix1;
	checkItems: CheckItem[];
	taskNoteAdviceItems: AdviceItem[];
	prerequisiteKnowledge?: {
		articleIds?: NanoId1[];
		taskIds?: NanoId1[];
		additionalMarkdown?: I18NFileLocationPrefix;
		accessLimitedMarkdown?: I18NFileLocationPrefix;
	};
	lifecycleStages: LifecycleStageByEnvironment;
	arielOption: ArielOption;
	closing?: Closing;
}
export interface TaskTypeEnvironmentSetup {
	value: "ENVIRONMENT_SETUP";
	category: "required_for_all" | "required_for_some";
	[k: string]: unknown;
}
export interface TaskTypeStudy {
	value: "STUDY";
	category:
		| "tools"
		| "git_and_github"
		| "commandline"
		| "javascript_node_js"
		| "typescript"
		| "html_css"
		| "database"
		| "web_application"
		| "testing"
		| "container_cloud"
		| "algorithm"
		| "web_security"
		| "frontend";
	[k: string]: unknown;
}
export interface TaskTypePractical {
	value: "PRACTICAL";
	category:
		| "design_investigation_analysis"
		| "debug"
		| "feature_backend"
		| "feature_frontend"
		| "testing"
		| "infrastructure";
	[k: string]: unknown;
}
export interface TaskTypeCommunity {
	value: "COMMUNITY";
	category: "community";
	[k: string]: unknown;
}
export interface Menu {
	overviewItem: I18NFileLocationPrefix;
	setUpItem: I18NFileLocationPrefix;
	taskItems: TaskItem[];
	specItems: SpecItem[];
}
export interface TaskItem {
	title: I18NKey1;
	description: I18NFileLocationPrefix;
	anchorLink: AnchorLink;
}
export interface SpecItem {
	title: I18NKey1;
	description: I18NFileLocationPrefix;
	anchorLink: AnchorLink;
}
export interface CheckItem {
	id: NanoId1;
	description: I18NKey1;
	commands: CheckItemCommand[];
	adviceItems: AdviceItem[];
}
export interface CheckItemCommand {
	id: NanoId1;
	/**
	 * 実行するコマンド
	 */
	commandLine: string;
	arielCommandExpectation: ArielCommandExpectation;
	/**
	 * ariel実行時にこのコマンドをスキップしたい場合にtrueにする
	 */
	arielCommandSkip?: boolean;
}
export interface ArielCommandExpectation {
	isSuccessWhenAnswerOn: boolean;
	isSuccessWhenAnswerOff: boolean;
}
export interface AdviceItem {
	id: NanoId1;
	title: I18NKey1;
	description: I18NFileLocationPrefix;
	gatedDescription?: I18NFileLocationPrefix;
}
/**
 * 環境ごとのlifecycle stage
 */
export interface LifecycleStageByEnvironment {
	development: LifecycleStage;
	staging: LifecycleStage;
	production: LifecycleStage;
}
export interface ArielOption {
	skip?: boolean;
	/**
	 * 想定している正解時のユーザーが実行するコマンドをまとめたシェルスクリプトへの相対パス
	 */
	userAnswerSimulationScript?: string;
	/**
	 * ariel実行時にセットアップに必要なコマンド
	 */
	setUpCommands?: {
		/**
		 * 実行するコマンド
		 */
		commandLine: string;
	}[];
}
/**
 * 公開終了に関する情報。deprecated/closedの場合必須(CIのtaskvalidatorでチェックされる)
 */
export interface Closing {
	/**
	 * 公開終了日時
	 */
	date: string;
	/**
	 * 公開終了が確定したタスクの代わりとなる、より新しいタスクのID
	 *
	 * @minItems 1
	 */
	replacementTaskIds: [NanoId1, ...NanoId1[]];
}
