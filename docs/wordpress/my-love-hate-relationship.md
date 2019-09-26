# My Love Hate Relationship with Wordpress

A lot of developers hate Wordpress. Especially developers, who just joined Wordpress Development. And I can really understand it. The documentation is not great, the structure is unusual and you have to understand how Wordpress works, at least a bit. There are also no best practices, which are taught everywhere. So everybody, who contributes to the wordpress ecosystem (plugins, themes, edits in any other way) has their own style. So if developer A looks into WP Code of developer B, it takes some time, cause there are no communicated conventions. 

And almost anybody can contribute to WP. So that invites developers of all kind. And inexperienced developers are common.

We just employed a new IT guy for our company. He did work with AngularJS and Puppeteer for the most part. So his knowledge in the JS spectrum is pretty good. He has to learn about the workings of WP. So for me the biggest obstacle has been the understanding of the database structure.

## Understanding the Wordpress Database

(Almost) everything is a post in WP. A new page is a "post" in WP, a new post is a post. If you have Woocommerce for example, a shop order is a post, a product is a post - you get it. A post can have multiple slugs / categories and so on.

## Security

Wordpress is the most used CMS out there. So it's obvious that you might fall victom to hackers. And dont get me wrong, there are automated scripts, so you will be a target anyway, but WP and it's plugins might have a security flaw. See the [Exploit Database](https://exploit-db.com).

There are multiple methods how you secure your wordpress intance. What is best is always depending on the resource and situation. But I've heard good stuff about [Wordfence](https://wordpress.org/plugins/wordfence/). 

## Ease of use

With a crashcourse almost anybody can use Wordpress to manage content. It's a CMS (Content Management System) after all. A non developer can 'build' a website really really quick. There are page builders also. They work like drag & drop. 

