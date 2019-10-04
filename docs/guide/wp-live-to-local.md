If you need to download a live wp site and develop locally, this guide might be just for you.

What we will cover in this guide:
	-[ ] 

These are the steps we have to go through:
	-[ ] Download the SQL File
	-[ ] Download the live instance
	-[ ] Start the local server
	-[ ] Put the live instance to your local server directory
	-[ ] Import the database
	-[ ]   

```sql
-- variables: PREFIX; URL; HTDOCS_DIR
-- TODO/TRY UPDATE PREFIXposts SET guid = replace(guid, 'URL', 'http://localhost:8888/HTDOCS_DIR');
UPDATE PREFIXoptions SET option_value = replace(option_value, 'URL', 'http://localhost:8888/HTDOCS_DIR') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE PREFIXposts SET post_content = replace(post_content, 'URL', 'http://localhost:8888/HTDOCS_DIR');
UPDATE PREFIXpostmeta SET meta_value = replace(meta_value, 'URL','http://localhost:8888/HTDOCS_DIR');

```
