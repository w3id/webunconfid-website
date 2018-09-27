export default class TRouter {
    constructor(){
        this.currentRoute='home';
        this.routes=[];
        this.notFound='404';
        this.activeRoute=null;
        this.initEvent();
    }
    // need to fix this on safari to use composedPath
    initEvent(){
        //handle if a link click and prevent to reload the page
        document.addEventListener('click',(e) => {
            const path=e.composedPath();
            if (path[0].nodeName!=='A') return;
            const link=path[0].getAttribute('href');
            //make sure the link not outside the app
            if(link.indexOf('http')<0 && link.substring(0,2)!=='//'){
                this.goTo(link);
                e.preventDefault();
            }
        });
    }

    goTo(url){
        let notFound=true;
        for (let i = 0; i < this.routes.length; i++) {
            const route = this.routes[i];
            const cleanUrl=url.substring(0, url.indexOf('#'));                  
            if(cleanUrl===route.pattern || url===route.pattern){
                this.setActiveRoute(url,route);
                notFound=false;
                break;
            } 
        }

        if(notFound){
            //this.goTo(this.notFound);
        } 
    }

    setActiveRoute(url,route){
        history.pushState(null, null, url);
        route.callback();
        this.activeRoute=route.pattern;
        
    }

    on(route,callback){
        const newRoute={
            pattern:route,
            callback:callback
        };
        this.routes.push(newRoute);
        if(window.location.pathname.match(route)){
            this.setActiveRoute(window.location.pathname,newRoute);
        }
    }


}