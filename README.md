# Cordova Windows popup test app

Template to play with Cordova popup dialogs on Windows. May be used as a starter project.

**AUTHOR:** [@brodybits (Christopher J. Brody aka Chris Brody)](https://github.com/brodybits)

**LICENSE:** [CC0 1.0 (public domain)](https://creativecommons.org/publicdomain/zero/1.0/)

**NOTE:** This project includes JQuery (2.2.4) and Bootstrap (3.3.6) under the MIT license. Otherwise there is no code copied from other sources.

**IMPORTANT:** Whitelist and intent items are omitted from this test app.

**NOTICE:** This test does not work on macOS ("osx") since it is not supported by `cordova-plugin-dialogs`.

## Dependencies

- Bootstrap (3.3.6) - included (MIT license)
- JQuery (2.2.4) - included (MIT license)
- `cordova-plugin-dialogs-with-windows-popups` - added by `cordova plugin add https://github.com/brodybits/cordova-plugin-dialogs#windows-popup-test-master --save` and now specified in `config.xml`

NOTE: `cordova-plugin-dialogs-with-windows-popups` was added using the `--save` flag to ensure that this plugin would be automatically installed. It is recommended to use the `--save` flags to add any other plugins rather than adding such plugins to git.

## To add another plugin

```shell
cordova plugin add my-plugin-id --save
```

## How to run

**Step 1:** Add the desired platform(s), for example:

```shell
cordova platform add android
```

**Step 2 (optional):** Do `cordova prepare` (may not be necessary but good to be on the safe side):

```shell
cordova prepare
```

**Step 3:** Run it on your mobile emulator or device, for example:

```shell
cordova run android
```

## Functionality

- Popup test 1: popup dialog test with 4 choices at `{x:50,y:75}`, using `navigator.notification.popup` which uses `Windows.UI.Popups.PopupMenu` (Windows ONLY)
- Popup test 2: popup dialog test with 4 choices, using `navigator.notification.popup2` which uses an HTML implementation (Windows ONLY)
- Native confirm dialog test with 2 choices - using `navigator.notification.confirm` which uses `Windows.UI.Popups.MessageDialog` on Windows (LABELS BROKEN on browser)
- Native confirm dialog test with 3 choices - using `navigator.notification.confirm` which uses `Windows.UI.Popups.MessageDialog` on Windows (BROKEN on browser & Windows Mobile)
