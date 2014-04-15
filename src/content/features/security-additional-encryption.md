## Encryption

### Communication

Communication between you and the **Peeler** is encrypted.

Communication between the **Peeler** and an **Potato** is encrypted.

![alt text]({{assets}}/images/features-security-encryption.png "Security - Encryption")

### Configuration

Account passwords are stored in the config of the **Potato** with a one-way encryption.

> It's not possible for us to login to your account or control your server, but more importantly we don't want too.

Game server passwords are stored in the config of the **Potato** with a two-way encryption. Procon must be able to decrypt these passwords back to plain-text to use in authentication with the game server.

> Call of Duties remote console protocol requires passwords be sent in plain-text. There is only so much we can do.
