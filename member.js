function skillMembers() {
  return {
    name: 'members',
    description: 'Members of the skill',
    usage: 'members',
    execute(message) {
      const members = message.client.users.cache
        .filter(user => user.presence.status !== 'offline')
        .map(user => user.username)
        .join(', ');
      message.channel.send(`Members online: ${members}`);
    },
  };
}