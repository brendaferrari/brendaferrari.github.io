---
layout: post
title: Openbabel installation memo!
publishedAt: 2024-08-08 13:30 +0800
# last_modified_at: 2020-10-01 01:08:25 +0800
tags: [pymol, jupyter notebook, chemistry]
toc: true
---

# Openbabel installation memo!

Hello everyone!

Just a simple memo so I can share how to install openbabel easily.

So, I always refrained myself from using openbabel since it was always so hard to install, with all the compiling process. Probably this is not news but it is possible to install openbabel on Linux in a very straight-forward way.

## Is openbabel easily installed on Linux Ubuntu?

Yes!

The thing is that, openbabel is a package available on the Ubuntu Package archive. You can check the Linux Ubuntu versions that they have openbabel available [here](https://packages.ubuntu.com/search?keywords=openbabel&searchon=names&suite=all&section=all).

But before you click on the link, I can already assure you that it is available for the 22.04LTS, codename jammy.

## How is it possible to install openbabel on Linux Ubuntu 22.04 LTS?

Just install it using the following command line on your Linux Ubuntu terminal:

```bash
sudo apt install openbabel
```

Simple as that!

## How about Windows OS?

Ok, I have been using the Windows OS for many years to do research. But since there is some software that works better on Linux and others that work better on Windows, I use WSL to be able to use both OS without the burden of having a virtual machine. In the case of openbabel, I still have not found a way to install it easily on Windows OS. If you find a solution for this, please let me know and I will add it to this blog post. Of course, if I discover anything else, I will update this blog post as well.
