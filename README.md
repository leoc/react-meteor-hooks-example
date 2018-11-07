This is a simple proposal for how an API could look like that is using
react hooks.

The basis is Meteor 1.8 with `meteor new --react
react-meteor-hooks-example`.

To add the package use:

```
git clone -b react-meteor-hooks https://github.com/leoc/react-packages.git ../react-packages
mkdir -p ./packages
ln -sf ../../react-packages/packages/react-meteor-hooks packages/react-meteor-hooks
```

Then run the example

```
meteor npm install
meteor
```
