export default class StaticSiteTemplate {
    title;
    content;
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    build() {
        return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
        <title>${this.title}</title>
        <link rel="stylesheet" type="text/css" href="/bundle.css" />
    </head>
    
    <body>
        ${this.content.build()}
        <script src="/bundle.js"></script>
    </body>
    
    </html>`.split("\n").map((line) => line.trim()).join("");
    }
}
//# sourceMappingURL=StaticSiteTemplate.js.map