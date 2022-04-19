---
title: NFL Sr.Chester Bot.
layout: default
---

<h1>{{title}}</h1>


{%- for item in sheet.content -%}
<div class="linkCard">
<h6 class="channelName">{{item["Channel Name"]}}</h6>
  <h5>{{ item["User Message"]}} </h5>

  <a href="{{item.Link}}">Link</a>

  </div>
{%- endfor -%}




