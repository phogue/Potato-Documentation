> Running your own Potato is fairly straight forward, but some of the naming conventions may trip you up.

The Potato is split into two packages. One package, the **Service**, is only updated infrequently. The other, the **Core Packages**, are updated on the fly.

The **Service**/Potato.exe is the executable you run to host a Potato.

The **Service** will check for and download updates to the **Core Packages** whenever it is started.

You can update **Core Packages** within the Peeler.