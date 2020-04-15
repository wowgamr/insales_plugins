### Перечисление модификаций

```
<div itemprop="offers" itemscope itemtype="https://schema.org/AggregateOffer" style="display: none;">
	<meta itemprop="lowPrice" content="{{ product.price_min }}"/>
	<meta itemprop="highPrice" content="{{ product.price_max }}"/>
	<meta itemprop="offerCount" content="{{ product.variants.size }}"/>
	<meta itemprop="priceCurrency" content="RUB"/>
	{% for variant in product.variants %}
		<div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
			<meta itemprop="price" content="{{ variant.price }}"/>
			<meta itemprop="sku" content="{{ variant.id }}"/>
			<link itemprop="availability" href="https://schema.org/{% if variant.available %}InStock{% else %}OutOfStock{% endif %}"/>
		</div>
	{% endfor %}
</div>
```

### Рейтинг товара

```
{% if product.rating %}
<div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating" style="display: none;"> 
  <meta itemprop="worstRating" content="1"/>
  <meta itemprop="ratingValue" content="{{ product.rating }}"/>
  <meta itemprop="bestRating" content="5"/>
  <meta itemprop="ratingCount" content="{{ product.reviews_count }}"/>
</div>
{% endif %}
```