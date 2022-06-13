# Minrep @golevelup/nestjs issue 444

Minimum code reproduction of the error seen in issue 444 of @golevelup/nestjs/stripe .

## Reproduce error

To reproduce this error clone this repository and run

* `npm i`
* `nx test`

## Error Described

```
 Nest can't resolve dependencies of the AppService (?). Please make sure that the argument Symbol(STRIPE_CLIENT_TOKEN) at index [0] is available in the RootTestModule context.

    Potential solutions:
    - If Symbol(STRIPE_CLIENT_TOKEN) is a provider, is it part of the current RootTestModule?
    - If Symbol(STRIPE_CLIENT_TOKEN) is exported from a separate @Module, is that module imported within RootTestModule?
      @Module({
        imports: [ /* the Module containing Symbol(STRIPE_CLIENT_TOKEN) */ ]
      })
```
