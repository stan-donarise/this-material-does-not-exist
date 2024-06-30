<h1 align="center">💎 <a href="thismaterialdoesnotexist.com">this-material-does-not-exist</a> 💎</h1>

Get given random crystal structures predicted by ML materials discovery projects, and vote on whether you think it should be synthesizable (or, at least, whether it is worth trying!)

Currently uses [cifplayer](https://github.com/tilde-lab/cifplayer) and data from the
[OPTIMADE API](https://optimade.org) for the recent [Google DeepMind
paper](https://github.com/google-deepmind/materials_discovery).
The physical properties prediction is done dynamically by [MPDS](https://mpds.io/ml).

![2023-12-10-001838_1095x878_scrot](https://github.com/ml-evs/this-material-does-not-exist/assets/7916000/678ba7ec-d929-438e-8637-3dad5bf26493)


## Build

The `cifplayer` is powered by `$mol`. Note that, unlike many other frontend frameworks, `$mol` provides the same single environment for all its projects, under the standard namespace scheme. That is, all your `$mol`-based code lives inside the same directory `$MOL_HOME`. So if you don't have `$MOL_HOME` yet, please create it and navigate there:

```bash
mkdir $MOL_HOME && cd $MOL_HOME
```

Then build with

```bash
npm exec mam optimade/tmdne/app
```

This will fetch the MAM server (MAM stands for the `$mol` abstract modules), clone this project, and compile it inside `optimade/tmdne/app/-/` subfolder. You will need the `web.js` bundle, that's it.


## Develop

Similarly to above, inside the `$MOL_HOME`, start the MAM dev-server with

```bash
npm exec mam
```

and navigate to http://localhost:9080, there select `optimade` namespace, then `tmdne`, then `app`. As you go through the folder structure, the selected project is being cloned and compiled on the fly, inside the corresponding subfolder of `$MOL_HOME`.
