## Streaming

A Procon **Potato** typically streams events back to the **Peeler**. To do this, the **Peeler** needs to authenticate with your **Potato** and tell it where to send the events.

The **Peeler** will synchronize with your **Potato** every five minutes, at which time it will generate a new password for your **Potato** to authenticate back to the **Peeler** when it pushes events.

The **Stream** group has minimal permissions. Just enough to authenticate, setup a stream and query for all current data on the **Potato**.

This data includes:
- Connections
- Players
- Bans
- Maps
- Groups
- Accounts
- Players attached to accounts
- Repositories
- Packages
- Available protocols

> No passwords are transferred in emitted events