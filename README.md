# Cache

```
await fetch('https://jsonplaceholder.typicode.com/todos/', { cache: 'no-cache'})
```

- no-cache -> SSR
- force-cache -> SSR

### ISR

```
fetch('https://jsonplaceholder.typicode.com/todos/', { next: { revalidate: 60 }});
```

- revalidate on 60 seconds.


