# Link-Checker

### WORK IN PROGRESS...

### Description:
Since Googles decided to introduce .zip and .mov as TLDs (which is completely brain dead),
I've created this extension as a preventative measure to prompt the user with a confirmation if a link contains any combination of U+2044, U+2215, .zip, or .mov.

## Installation:

#### Firefox Dev: 

1. Download the lastest ```link-checkervX.X.X.zip``` from release.
2. Go to ```about:config``` in your url and set ```xpinstall.signatures.required``` to ```false``` by double clicking on ```true```.
3. Then go to ```about:addons``` and drag the previously downloaded zip into Firefox Dev and hit add. It'll warn you that the extension is unverified and that's fine and if your concerned feel free to go through the code its only 69 lines of code at the time of writing this.
4. (<b>Optional</b>) Once installed go back to ```about:config``` and set ```xpinstall.signatures.required``` back to ```true```.

#### Chrome:

1. Download the the repo by clicking the ```Code``` button and then ```Download ZIP```.
3. Extract the src folder to somewhere you'll remember.
4. (Optional) While it can technically be install and work fine it'll show a manifest error if you want to remove the errors replace the 2 in ```manifest_version``` with 3 and remove the whole ```browser_specific_settings``` section.
5. Then go to ```chrome://extensions/``` and toggle the developer mode to on.
6. Click ```Load unpacked``` and select the source folder you'll get a warning and just hit continue. 


## FAQ: 
<b>Q</b>: Why Firefox Dev specifically and not just Firefox?
<br>
<b>A</b>: Regular Firefox requires all extension to be signed and getting it signed is an unnecessary hassle and since I made the extension for my own personal use and I don't plan to go through the hassle of creating an account and going through the waiting process to get it signed.


