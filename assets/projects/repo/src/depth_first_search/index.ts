//#if SITUATION == DEPTH_FIRST_SEARCH
export interface FileSystemNode {
	name: string;
	isDirectory: boolean;
	children: FileSystemNode[];
}

export const depthFirstSearch = (
	root: FileSystemNode,
	target: string,
): boolean => {
	//#if ANSWER == 1
	const stack = [root];
	while (stack.length > 0) {
		const node = stack.pop() as FileSystemNode;
		if (!node.isDirectory && node.name === target) {
			return true;
		}
		if (node.isDirectory) {
			stack.push(...node.children);
		}
	}

	return false;
	//#endif
};
//#endif
