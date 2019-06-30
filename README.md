# What is rvnm
Responsive vertical navigation menu same as wordpress menu, with search and themes.
#How use it?
With package manager:
````
npm i rvnm
````
or 
````
yarn add rvnm
````

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
                <i class="fa fa-bell-o"></i>
                eleifend risus
            </a>
            <ul>
                <li>
                    <a href="#">
                        suscipit mauris
                    </a>
                </li>
                <li>
                    <a href="#">
                        sed placerat ipsum
                    </a>
                </li>
                <li>
                    <a href="#">
                        Proin turpis
                    </a>
                </li>

            </ul>

        </li>
        <li class="">
            <a href="#">  
                <i class="fa fa-bullhorn"></i>
                bibendum dapibus
            </a>
        </li>
        <li>
            <a href="#">  
                <i class="fa fa-building"></i>
                Proin nonummy
            </a>
        </li>
        <li>
            <span class="spliter">
                <i class="fa fa-bars"></i>
                 Nullam non diam
            </span>
        </li>
        <li>
            <a href="#">  
                <i class="fa fa-align-center"></i>
                platea dictumst
            </a>
            <ul>
                <li>
                    <a href="#">
                        lacus at augue
                    </a>
                </li>
                <li>
                    <a href="#">
                        pede felis
                    </a>
                </li>
                <li>
                    <a href="#">
                        dignissim leo
                    </a>
                </li>

            </ul>

        </li>
        <li>
            <a href="#">  
                <i class="fa fa-amazon"></i>
                second
            </a>
        </li>
        <li>
            <a href="#">  
                <i class="fa fa-apple"></i>
                third
            </a>
        </li>
        <li>
            <span class="spliter">
                <i class="fa fa-desktop"></i>
                splliter teest
            </span>
        </li>
        <li>
            <a href="#">  
                <i class="fa fa-expand"></i>
                quis lectus
            </a>
            <ul>
                <li>
                    <a href="#">
                        Nunc sed lacus
                    </a>
                </li>
                <li>
                    <a href="#">
                        Pellentesque
                    </a>
                </li>
                <li>
                    <a href="#">
                         malesuada nulla
                    </a>
                </li>

            </ul>

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
        <li>
            <a href="#">  
                <i class="fa fa-yoast"></i>
                sunt in culpa
            </a>
            <ul>
                <li>
                    <a href="#">
                        officia deserunt
                    </a>
                </li>
                <li>
                    <a href="#">
                         mollit anim id
                    </a>
                </li>
                <li>
                    <a href="#">
                         id est laborum
                    </a>
                </li>

            </ul>

        </li>
        <li>
            <a href="#">  
                <i class="fa fa-bank"></i>
                Aenean magna nisl
            </a>
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

#DEMO (example)
 
 You can watch /demo of project.
 
 
 Online demo:
 
 http://4xmen.ir/github_example/rvnm/demo/
 
 online rtl demo:
 
 http://4xmen.ir/github_example/rvnm/demo/index-rtl.html
 
 
#option and events

###`wrapper`
 is main body of site default is `#wrapper`
 
 ###`mode`
 mode of menu can be (default = desktop| minimal = tablet | mobile)
 
 ###`theme`
 theme of the menu default is `""` and this a light theme other themes:
 - `dark`
 - `dark-lesb` dark & pink
 - `dark-doder` dark & blue
 - `dark-beryl` dark & green
 - `dark-ruby` dark & red
 
 ###`searchable` 
 
 you can use searchable menu but default is `false`
 
 #screenshot
 
![A Screenshot ]( /screenshot.png?raw=true "Screen shot")


