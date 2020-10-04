### Данные об организации

```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Платформа InSales",
  "email": "info@insales.ru",
  "alternateName": "InSales",
  "url": "https://insales.ru",
  "logo": "https://assets3.insales.ru/assets/1/7012/1416036/1601477428/logotype-colorful.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+71111111111",
    "contactType": "customer service"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "RU",
    "addressLocality": "Москва", 
    "postalCode": "107078",
    "streetAddress": "ул. Новорязанская, д.18, стр.11"
  },
  "sameAs": "https://vk.com/insales"
}
</script>
```

### Данные о товаре и отзывах

```
{% if template == 'product' %}
<script type="application/ld+json">
{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "{{ product.title | escape }}",
  "image": "{{ product.images.first.original_url }}",
  "description": "{{ product.description | strip_html | escape }}",
  "brand": "{{ product.properties.brend.characteristics.first.name }}",
  "sku": "{{ product.sku }}",
  "offers": [
    {%- for variant in product.variants -%}
      {
        "@type": "Offer",
    	"url": "{{ product.url }}",
    	"priceCurrency": "RUB",
    	"price": "{{ variant.price }}",
        "sku": "{{ variant.id }}",
    	"availability": "https://schema.org/{% if variant.available %}InStock{% else %}OutOfStock{% endif %}"
      }{% unless forloop.last %},{% endunless %}
    {%- endfor -%}
  ]
  {% if product.rating %},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ product.rating }}",
    "worstRating": "1",
    "bestRating": "5",
    "ratingCount": "{{ product.reviews_count }}",
    "reviewCount": "{{ product.reviews_count }}"
  },
  "review": [
  	{% for review in product.reviews %}
    {
      "@type": "Review",
      "name": "{{ product.title | escape }}",
      "reviewBody": "{{ review.content | escape }}",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "{% if review.rating %}{{ review.rating }}{% else %}5{% endif %}",
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": "{{ review.created_at | date: "%Y-%m-%d" }}",
      "author": {"@type": "Person", "name": "{{ review.author }}"}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ]
  {% endif %}
}
</script>
{% endif %}
```