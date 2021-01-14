# What is rvnm
Responsive vertical navigation menu same as wordpress menu, with search and themes.

![A Screenshot ]( /rvnm.gif?raw=true "Screen shot")
# How use it?
With package manager:
````
npm i rvnm
````
or 
````
yarn add rvnm
````

or use dist file of repo.

HTML:
```html
 <nav id="navbar" class="">
    <ul>
        <li>
            <span class="spliter">
                <i class="fa fa-cart-plus"></i>
                Aliquam dictum
            </span>
        </li>
        <li>
            <a href="#">  
                <i class="fa fa-plus-square"></i>
                Nunc eleifend molestie velit. Morbi lobortis quam eu velit
            </a>
            <ul>
                <li>
                    <a href="#">
                        semper leo
                    </a>
                </li>
                <li>
                    <a>
                        habitasse platea
                    </a>
                    <ul>
                        <li>
                            <a href="#">
                               dictumst
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Vivamus facilisis
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                In hac habitasse
                            </a>
                            <ul>
                                <li><a href="#"> platea dictumst </a></li>
                                <li><a href="#">Nunc sed lacus</a></li>
                                <li><a href="#">euismod gravida </a></li>

                            </ul>

                        </li>

                    </ul>

                </li>
                <li>
                    <a href="#">
                        sed placerat ipsum
                    </a>
                </li>

            </ul>

        </li>
        <li>
            <a href="#">  
                <i class="fa fa-address-book"></i>
                ipsum urna sed risus
            </a>
        </li>
        <li>
            <span class="spliter">
                <i class="fa fa-cut"></i>
                Maecenas fermentum
            </span>
        </li>
    </ul>
</nav>
```
jquery use:
```javascript
$(function () {
    var rvnMenu = $("#navbar").rvnm({
        searchable: true,
        theme: 'dark-lesb'
    });
    rvnMenu.setTheme('dark-doder');
});
```

# DEMO (example)
 
 You can watch /demo of project.

 
 Online demo:
 
 http://4xmen.ir/github_example/rvnm/demo/
 
 online rtl demo:
 
 http://4xmen.ir/github_example/rvnm/demo/index-rtl.html
 
 
# option and events

### `wrapper`
 is main body of site default is `#wrapper`
 
 ### `mode`
 mode of menu can be (default = desktop| minimal = tablet | mobile)
 
 ### `theme`
 theme of the menu default is `""` and this a light theme other themes:
 - `dark`
 - `dark-lesb` dark & pink
 - `dark-doder` dark & blue
 - `dark-beryl` dark & green
 - `dark-ruby` dark & red
 
 ### `searchable` 
 
 you can use searchable menu but default is `false`
 
 # screenshot
 
![A Screenshot ]( /screenshot.png?raw=true "Screen shot")


## Browser compatibility
- ![ie](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/archive/internet-explorer_9-11/internet-explorer_9-11_16x16.png) IE >= 9
- ![edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/edge/edge_16x16.png) Edge all version
- ![firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/firefox/firefox_16x16.png) Firefox >= 16
- ![safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/archive/safari_1-7/safari_1-7_16x16.png) Safari >=11
- ![chrom](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/chrome/chrome_16x16.png)/![chromium](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/chromium/chromium_16x16.png) chrome / chromium >= 26 
- ![opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/opera/opera_16x16.png) Opera >=15
- ![android](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/archive/android/android_16x16.png) Android browser >= 4.4
- Blackberry Browser >=  10
- ![ios safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/46.1.0/archive/safari-ios_1-6/safari-ios_1-6_16x16.png) iOS Safari >= 7

