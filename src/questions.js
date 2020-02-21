const CONTEXTS = {
  TICKET_TITLE: 'ticket_title',
  TICKET_BODY: 'ticket_body'
};

export default [
  {
    question: "What's the name of the ticket?",
    context: CONTEXTS.TICKET_TITLE,
    markdown: answer => `# ${answer}`
  },
  {
    question: 'What problem is it trying to solve?',
    context: CONTEXTS.TICKET_BODY,
    markdown: answer => `\n## What problem are we trying to solve?\n${answer}`
  },
  {
    question: 'How does it solve the problem?',
    context: CONTEXTS.TICKET_BODY,
    markdown: answer => `\n## How does this help?\n${answer}`
  },
  {
    question: 'Who should work on this ticket?',
    context: CONTEXTS.TICKET_BODY,
    hint: 'Backend, frontend, ops, BA, etc.',
    markdown: answer => `\n## Who should perform this work?\n${answer}`
  },
  {
    question: 'Where should the work take place?',
    context: CONTEXTS.TICKET_BODY,
    hint: 'Which repository, project, business domain, etc.',
    markdown: answer => `\n## Where should the work take place?\n${answer}`
  }
];
