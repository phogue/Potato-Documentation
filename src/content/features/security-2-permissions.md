## Permissions

### Authority

Permissions have a name and an authority level. Most permissions are toggled "On/Off" or "Allow/Deny" states, but when a permissions is used to execute a command that affects another account holder, such as one account kicking, then the authority level is used to determine if the action can take place.

Account holders will only be able to execute a command if their authority level matches or exceeds the target account or player.

Authority levels are taken into account during Account vs. Account, Account vs. Player or Player vs. Player interactions.

> To be able to execute any command at all a player must have 1 or above authority level

![alt text]({{assets}}/images/features-security-kick-authority-hierarchy.png "Security - Kick Authority Hierarchy")

| Account kicking a.. | Administrator (100) | Game Admin (50) | Player (0) |
|:------ | -----------:| -----------:| -----------:|
| Administrator (100)    | <i class="glyphicon glyphicon-ok"></i> | <i class="glyphicon glyphicon-ok"></i> | <i class="glyphicon glyphicon-ok"></i> |
| Game Admin (50)    | <i class="glyphicon glyphicon-remove"></i> | <i class="glyphicon glyphicon-ok"></i> | <i class="glyphicon glyphicon-ok"></i> |
| Player (0)    | <i class="glyphicon glyphicon-remove"></i> | <i class="glyphicon glyphicon-remove"></i> | <i class="glyphicon glyphicon-remove"></i> |

- An *Administrator* can kick other *Administrators*, *Game Admins* or *Players* as everyone matches or is below their **Authority** level
- A *Game Admin* can kick other *Game Admin*s or *Players*, but cannot kick an *Administrator* as their **Authority** exceeds a *Game Admins*
- A *Player* cannot kick anybody, including other *Players* as they do not have 1 or above **Authority**

### Custom

Plugins can define custom permissions, which have the same behaviour as the default list of permissions.

Plugins can **choose** to include a player or accounts credentials in a command, or they may just execute any command without checking for permission or authority levels.

> If you notice a plugin allowing Players or Accounts to take action you have otherwise prevented you may need to report the issue to the plugin developer.
