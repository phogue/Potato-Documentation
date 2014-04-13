## Streaming

A Procon **Instance** typically streams events back to the **UI**. To do this, the **UI** needs to authenticate with your **Instance** and tell it where to send the events.

The **UI** will synchronize with your **Instance** every five minutes, at which time it will generate a new password for your **Instance** to authenticate back to the **UI** when it pushes events.

The **Stream** group has minimal permissions. Just enough to authenticate, setup a stream and query for all current data on the **Instance**.

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