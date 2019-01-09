module.exports={name:"style",attrs:{xmlns:"http://purl.org/net/xbiblio/csl",class:"in-text",version:"1.0","demote-non-dropping-particle":"sort-only","page-range-format":"minimal"},children:[{name:"macro",attrs:{name:"author"},children:[{name:"names",attrs:{variable:"author"},children:[{name:"name",attrs:{"sort-separator":" ","initialize-with":"","name-as-sort-order":"all",delimiter:", ","delimiter-precedes-last":"always"},children:[]},{name:"label",attrs:{form:"long",prefix:", "},children:[]},{name:"substitute",attrs:{},children:[{name:"names",attrs:{variable:"editor"},children:[]}]}]}]},{name:"macro",attrs:{name:"editor"},children:[{name:"names",attrs:{variable:"editor",suffix:"."},children:[{name:"name",attrs:{"sort-separator":" ","initialize-with":"","name-as-sort-order":"all",delimiter:", ","delimiter-precedes-last":"always"},children:[]},{name:"label",attrs:{form:"long",prefix:", "},children:[]}]}]},{name:"macro",attrs:{name:"chapter-marker"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"chapter paper-conference entry-dictionary entry-encyclopedia",match:"any"},children:[{name:"text",attrs:{term:"in","text-case":"capitalize-first"},children:[]}]}]}]},{name:"macro",attrs:{name:"publisher"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine article-newspaper",match:"none"},children:[{name:"group",attrs:{delimiter:": ",suffix:";"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"thesis"},children:[{name:"text",attrs:{variable:"publisher-place",prefix:"[",suffix:"]"},children:[]}]},{name:"else-if",attrs:{type:"speech"},children:[]},{name:"else",attrs:{},children:[{name:"text",attrs:{variable:"publisher-place"},children:[]}]}]},{name:"text",attrs:{variable:"publisher"},children:[]}]}]}]}]},{name:"macro",attrs:{name:"access"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"URL"},children:[{name:"group",attrs:{delimiter:": "},children:[{name:"text",attrs:{term:"available at","text-case":"capitalize-first"},children:[]},{name:"text",attrs:{variable:"URL"},children:[]}]}]}]}]},{name:"macro",attrs:{name:"accessed-date"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"URL"},children:[{name:"group",attrs:{prefix:"[",suffix:"]",delimiter:" "},children:[{name:"text",attrs:{term:"cited","text-case":"lowercase"},children:[]},{name:"date",attrs:{variable:"accessed",form:"text"},children:[]}]}]}]}]},{name:"macro",attrs:{name:"container-title"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine chapter paper-conference article-newspaper review review-book entry-dictionary entry-encyclopedia",match:"any"},children:[{name:"group",attrs:{suffix:".",delimiter:" "},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal review review-book",match:"any"},children:[{name:"text",attrs:{variable:"container-title",form:"short","strip-periods":"true"},children:[]}]},{name:"else",attrs:{},children:[{name:"text",attrs:{variable:"container-title","strip-periods":"true"},children:[]}]}]},{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"URL"},children:[{name:"text",attrs:{term:"internet",prefix:"[",suffix:"]","text-case":"capitalize-first"},children:[]}]}]}]},{name:"text",attrs:{macro:"edition",prefix:" "},children:[]}]},{name:"else-if",attrs:{type:"bill legislation",match:"any"},children:[{name:"group",attrs:{delimiter:", "},children:[{name:"group",attrs:{delimiter:". "},children:[{name:"text",attrs:{variable:"container-title"},children:[]},{name:"group",attrs:{delimiter:" "},children:[{name:"text",attrs:{term:"section",form:"short","text-case":"capitalize-first"},children:[]},{name:"text",attrs:{variable:"section"},children:[]}]}]},{name:"text",attrs:{variable:"number"},children:[]}]}]},{name:"else-if",attrs:{type:"speech"},children:[{name:"group",attrs:{delimiter:": ",suffix:";"},children:[{name:"group",attrs:{delimiter:" "},children:[{name:"text",attrs:{variable:"genre","text-case":"capitalize-first"},children:[]},{name:"text",attrs:{term:"presented at"},children:[]}]},{name:"text",attrs:{variable:"event"},children:[]}]}]},{name:"else",attrs:{},children:[{name:"group",attrs:{delimiter:", ",suffix:"."},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"collection-title",match:"none"},children:[{name:"group",attrs:{delimiter:" "},children:[{name:"label",attrs:{variable:"volume",form:"short","text-case":"capitalize-first"},children:[]},{name:"text",attrs:{variable:"volume"},children:[]}]}]}]},{name:"text",attrs:{variable:"container-title"},children:[]}]}]}]}]},{name:"macro",attrs:{name:"title"},children:[{name:"text",attrs:{variable:"title"},children:[]},{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine chapter paper-conference article-newspaper review review-book entry-dictionary entry-encyclopedia",match:"none"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"URL"},children:[{name:"text",attrs:{term:"internet",prefix:" [",suffix:"]","text-case":"capitalize-first"},children:[]}]}]},{name:"text",attrs:{macro:"edition",prefix:". "},children:[]}]}]},{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"thesis"},children:[{name:"text",attrs:{variable:"genre",prefix:" [",suffix:"]"},children:[]}]}]}]},{name:"macro",attrs:{name:"edition"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{"is-numeric":"edition"},children:[{name:"group",attrs:{delimiter:" "},children:[{name:"number",attrs:{variable:"edition",form:"ordinal"},children:[]},{name:"text",attrs:{term:"edition",form:"short"},children:[]}]}]},{name:"else",attrs:{},children:[{name:"text",attrs:{variable:"edition",suffix:"."},children:[]}]}]}]},{name:"macro",attrs:{name:"date"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine article-newspaper review review-book",match:"any"},children:[{name:"group",attrs:{suffix:";",delimiter:" "},children:[{name:"date",attrs:{variable:"issued",form:"text"},children:[]},{name:"text",attrs:{macro:"accessed-date"},children:[]}]}]},{name:"else-if",attrs:{type:"bill legislation",match:"any"},children:[{name:"group",attrs:{delimiter:", "},children:[{name:"date",attrs:{variable:"issued",delimiter:" "},children:[{name:"date-part",attrs:{name:"month",form:"short","strip-periods":"true"},children:[]},{name:"date-part",attrs:{name:"day"},children:[]}]},{name:"date",attrs:{variable:"issued"},children:[{name:"date-part",attrs:{name:"year"},children:[]}]}]}]},{name:"else-if",attrs:{type:"report"},children:[{name:"date",attrs:{variable:"issued",delimiter:" "},children:[{name:"date-part",attrs:{name:"year"},children:[]},{name:"date-part",attrs:{name:"month",form:"short","strip-periods":"true"},children:[]}]},{name:"text",attrs:{macro:"accessed-date",prefix:" "},children:[]}]},{name:"else-if",attrs:{type:"patent"},children:[{name:"group",attrs:{suffix:"."},children:[{name:"group",attrs:{delimiter:", "},children:[{name:"text",attrs:{variable:"number"},children:[]},{name:"date",attrs:{variable:"issued"},children:[{name:"date-part",attrs:{name:"year"},children:[]}]}]},{name:"text",attrs:{macro:"accessed-date",prefix:" "},children:[]}]}]},{name:"else-if",attrs:{type:"speech"},children:[{name:"group",attrs:{delimiter:"; "},children:[{name:"group",attrs:{delimiter:" "},children:[{name:"date",attrs:{variable:"issued",delimiter:" "},children:[{name:"date-part",attrs:{name:"year"},children:[]},{name:"date-part",attrs:{name:"month",form:"short","strip-periods":"true"},children:[]},{name:"date-part",attrs:{name:"day"},children:[]}]},{name:"text",attrs:{macro:"accessed-date"},children:[]}]},{name:"text",attrs:{variable:"event-place"},children:[]}]}]},{name:"else",attrs:{},children:[{name:"group",attrs:{suffix:"."},children:[{name:"date",attrs:{variable:"issued"},children:[{name:"date-part",attrs:{name:"year"},children:[]}]},{name:"text",attrs:{macro:"accessed-date",prefix:" "},children:[]}]}]}]}]},{name:"macro",attrs:{name:"pages"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine article-newspaper review review-book",match:"any"},children:[{name:"text",attrs:{variable:"page",prefix:":"},children:[]}]},{name:"else-if",attrs:{type:"book",match:"any"},children:[{name:"text",attrs:{variable:"number-of-pages",prefix:" "},children:[]},{name:"choose",attrs:{},children:[{name:"if",attrs:{"is-numeric":"number-of-pages"},children:[{name:"label",attrs:{variable:"number-of-pages",form:"short",prefix:" ",plural:"never"},children:[]}]}]}]},{name:"else",attrs:{},children:[{name:"group",attrs:{prefix:" ",delimiter:" "},children:[{name:"label",attrs:{variable:"page",form:"short",plural:"never"},children:[]},{name:"text",attrs:{variable:"page"},children:[]}]}]}]}]},{name:"macro",attrs:{name:"journal-location"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine review review-book",match:"any"},children:[{name:"text",attrs:{variable:"volume"},children:[]},{name:"text",attrs:{variable:"issue",prefix:"(",suffix:")"},children:[]}]}]}]},{name:"macro",attrs:{name:"collection-details"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"article-journal article-magazine article-newspaper review review-book",match:"none"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{variable:"collection-title"},children:[{name:"group",attrs:{delimiter:" ",prefix:"(",suffix:")"},children:[{name:"names",attrs:{variable:"collection-editor",suffix:"."},children:[{name:"name",attrs:{"sort-separator":" ","initialize-with":"","name-as-sort-order":"all",delimiter:", ","delimiter-precedes-last":"always"},children:[]},{name:"label",attrs:{form:"long",prefix:", "},children:[]}]},{name:"group",attrs:{delimiter:"; "},children:[{name:"text",attrs:{variable:"collection-title"},children:[]},{name:"group",attrs:{delimiter:" "},children:[{name:"label",attrs:{variable:"volume",form:"short"},children:[]},{name:"text",attrs:{variable:"volume"},children:[]}]}]}]}]}]}]}]}]},{name:"macro",attrs:{name:"report-details"},children:[{name:"choose",attrs:{},children:[{name:"if",attrs:{type:"report"},children:[{name:"text",attrs:{variable:"number",prefix:"Report No.: "},children:[]}]}]}]},{name:"citation",attrs:{collapse:"citation-number"},children:[{name:"sort",attrs:{},children:[{name:"key",attrs:{variable:"citation-number"},children:[]}]},{name:"layout",attrs:{prefix:"(",suffix:")",delimiter:","},children:[{name:"text",attrs:{variable:"citation-number"},children:[]}]}]},{name:"bibliography",attrs:{"et-al-min":"7","et-al-use-first":"6","second-field-align":"flush"},children:[{name:"layout",attrs:{},children:[{name:"text",attrs:{variable:"citation-number",suffix:". "},children:[]},{name:"group",attrs:{delimiter:". ",suffix:". "},children:[{name:"text",attrs:{macro:"author"},children:[]},{name:"text",attrs:{macro:"title"},children:[]}]},{name:"group",attrs:{delimiter:" ",suffix:". "},children:[{name:"group",attrs:{delimiter:": "},children:[{name:"text",attrs:{macro:"chapter-marker"},children:[]},{name:"group",attrs:{delimiter:" "},children:[{name:"text",attrs:{macro:"editor"},children:[]},{name:"text",attrs:{macro:"container-title"},children:[]}]}]},{name:"text",attrs:{macro:"publisher"},children:[]},{name:"group",attrs:{},children:[{name:"text",attrs:{macro:"date"},children:[]},{name:"text",attrs:{macro:"journal-location"},children:[]},{name:"text",attrs:{macro:"pages"},children:[]}]}]},{name:"text",attrs:{macro:"collection-details",suffix:". "},children:[]},{name:"text",attrs:{macro:"report-details",suffix:". "},children:[]},{name:"text",attrs:{macro:"access"},children:[]}]}]}]};