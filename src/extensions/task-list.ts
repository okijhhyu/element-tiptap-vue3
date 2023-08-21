import type { Editor } from '@tiptap/core';
import TiptapTaskList from '@tiptap/extension-task-list';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import TaskItem from './task-item';

const TaskList = TiptapTaskList.extend({
  addOptions() {
    return {
      buttonIcon: '',
      ...this.parent?.(),
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleTaskList();
            },
            isActive: editor.isActive('taskList'),
            buttonIcon: extension.options.buttonIcon,
            icon: 'tasks',
            tooltip: t('editor.extensions.TodoList.tooltip'),
          },
        };
      },
    };
  },

  addExtensions() {
    return [TaskItem];
  },
});

export default TaskList;
