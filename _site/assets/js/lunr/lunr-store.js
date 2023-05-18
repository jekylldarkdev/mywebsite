var store = [{
        "title": "How To Safely Access Dark Web",
        "excerpt":"How to safely access the Dark &amp; Deep web Even if you use the internet on a daily basis – writing emails and styling with your YouTube skills – there may still be uncharted lands on your Internet map. What if I told you that you can only see a...","categories": [],
        "tags": [],
        "url": "/how-to-safely-access-dark-web/",
        "teaser": "/assets/images/500x300.png"
      },{
        "title": "What Is Dark Web",
        "excerpt":"What is the dark web? How to access it and what you’ll find The dark web is part of the internet that isn’t visible to search engines and requires the use of an anonymizing browser called Tor to be accessed. Dark web definition The dark web is a part of...","categories": [],
        "tags": [],
        "url": "/what-is-dark-web/",
        "teaser": "/assets/images/500x300.png"
      },{
    "title": "About",
    "excerpt":"About Solution-focused Cyber Security Specialist with the incident and vulnerability analysis expertise. Monitors new and emerging technologies to innovate risk management. Proactive and adaptive to deliver targeted remedial action, maintaining best practices. Work history February 2010 - Current Cyber Security Specialist Devising protocols for constant vigilance regarding network vulnerabilities. Working...","url": "http://localhost:4000/about/"
  },{
    "title": null,
    "excerpt":" ","url": "http://localhost:4000/"
  },{
    "title": "Verified Onion Links",
    "excerpt":"Verified Onion Links Here are some of the best Tor links to start your dark web adventure Security Tor Project Whonix Qubes OS Tails Search Engines Ahmia DuckDuckGo Tor Directory Search Index The Hidden Wiki Social Twitter Facebook News BBC The New York Times Email Protonmail Crypto Monero XMR Electrum...","url": "http://localhost:4000/links/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  }]
