## Setup - Manual

> These steps are provided here for a more in-depth instruction so hosts or individuals can tailor the setup. The majority of setups can be [accomplished automatically](#setup-automated)

### Details

> The user will only ever need to enter the Administrator password. The other passwords are encouraged to be random and between 20 and 60 characters.

* You will require the following information to complete a setup.
    * Generate four (yes, four) passwords.
        * {Certificate Password} One password for the certificate file, for generated self-signed certificate enabling SSL communication
        * {Config Password} One password for encrypting your configs
        * {Stream Password} One password for a user (Stream) for procon.myrcon.com to connect to your instance
        * {Administrator Password} One password for the main administrator
    * {Administrator Username} A main Administrator username
    * {Port} A port to bind the command server to.
        * There is no default or recommended port. I've personally been using 3222, but you can pick anything above 1024.
        * The port needs to be open (TCP) http://www.canyouseeme.org/

### Config

```
# This command will create a certificate in the "Certificates" folder
Potato.Config.exe --Command "CommandServerGenerateCertificate" "{Certificate Password}"

# This command will install the core packages (Myrcon.Potato.Core, Myrcon.Potato.Shared)
Potato.Config.exe --Command "ServiceUpdateCore"

# Set the default language to fallback on if a user has not specified any language preference.
Potato.Config.exe --Command "VariablesSetA" "LocalizationDefaultLanguageCode" "en-UK"

Potato.Config.exe --Command "SecurityAddGroup" "Stream"

# Sets all the permissions procon.myrcon.com requires to establish a stream of events back to procon.myrcon.com
Potato.Config.exe --Command "SecuritySetPredefinedStreamPermissions" "Stream"

# Adds an account to the "Stream" group
Potato.Config.exe --Command "SecurityGroupAddAccount" "Stream" "ProconUI"

# Sets the password of the new stream account
Potato.Config.exe --Command "SecurityAccountSetPassword" "ProconUI" "{Stream Password}"

Potato.Config.exe --Command "SecurityAddGroup" "Administrators"

# Enables all useful commands a full Administrator can execute through procon.myrcon.com
Potato.Config.exe --Command "SecuritySetPredefinedAdministratorsPermissions" "Administrators"

Potato.Config.exe --Command "SecurityGroupAddAccount" "Administrators" "{Administrator Username}"

# Sets the password of the new administrator account
Potato.Config.exe --Command "SecurityAccountSetPassword" "{Administrator Username}" "{Administrator Password}"
```

### Command line arguments

```
Potato.exe --CommandServerEnabled true --CommandServerPort {Port} --CommandServerCertificatePassword "{Certificate Password}" --PotatoConfigPassword "{Config Password}"
```

You can pass in any command line arguments and they will be internally set as variables within the Potato.

You can see a list of variables the Potato uses on [GitHub](https://github.com/Myrcon/Procon-2-Potato/blob/master/src/Potato.Core.Shared/Models/CommonVariableNames.cs)

> You can include --MaximumProtocolConnections {Max Connections} for example to limit the number of connections an instance can establish.

### Putting it all together

1. Extract the **Service** to a folder
2. Ensure the folder has write permission for the user executing Potato.exe or Potato.Service.exe
3. Replace all of the data in the [Config](#setup-config) with the details you have generated
4. Execute the commands in the [Config](#setup-config)
5. Replace all of the data in the [Command line arguments](#command-line-arguments) with the details you have generated
6. Start Potato with the [Command line arguments](#command-line-arguments)
7. Sign up for a self hosted Potato at https://billing.myrcon.com/ using the details you generated
