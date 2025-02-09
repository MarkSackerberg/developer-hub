---
title: Verified Collections
metaTitle: Token Metadata - Verified Collections
description: Learn how to safely wrap Assets into collections on Token Metadata
---

_Coming soon..._

## Associating NFTs to Collection NFTs

_Coming soon..._

{% diagram %}

{% node %}
{% node #mint-1 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-1" y=-180 %}
{% node #metadata-1 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node label="Collection = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-1" x=-10 y=-25 theme="transparent" %}
Collection NFT {% .font-bold %}
{% /node %}
{% node #metadata-pda-1 parent="metadata-1" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-1" x=360 %}
{% node #mint-2 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-2" y=-180 %}
{% node #metadata-2 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node #metadata-2-collection theme="orange" z=1 %}
Collection

\- Key \
\- Verified = **True**

{% /node %}
{% /node %}
{% node parent="metadata-2" x=-10 y=-40 theme="transparent" %}
Regular NFT {% .font-bold %}

Attached to a collection
{% /node %}
{% node #metadata-pda-2 parent="metadata-2" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-2" x=360 %}
{% node #mint-3 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-3" y=-180 %}
{% node #metadata-3 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node label="Collection = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-3" x=-10 y=-40 theme="transparent" %}
Regular NFT {% .font-bold %}

With no collection
{% /node %}
{% node #metadata-pda-3 parent="metadata-3" x="-100" label="PDA" theme="crimson" /%}

{% edge from="mint-1" to="metadata-pda-1" theme="dimmed" /%}
{% edge from="metadata-pda-1" to="metadata-1" path="straight" theme="dimmed" /%}
{% edge from="mint-2" to="metadata-pda-2" theme="dimmed" /%}
{% edge from="metadata-pda-2" to="metadata-2" path="straight" theme="dimmed" /%}
{% edge from="mint-3" to="metadata-pda-3" theme="dimmed" /%}
{% edge from="metadata-pda-3" to="metadata-3" path="straight" theme="dimmed" /%}
{% edge from="metadata-2-collection" to="mint-1" theme="orange" /%}

{% /diagram %}

## Differentiating NFTs from Collection NFTs

_Coming soon..._

{% diagram %}

{% node %}
{% node #mint-1 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-1" y=-230 %}
{% node #metadata-1 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node label="Collection = None" theme="orange" z=1 /%}
{% node label="Use" /%}
{% node theme="orange" z=1 %}
CollectionDetails = **Some**
{% /node %}
{% /node %}
{% node parent="metadata-1" x=-10 y=-25 theme="transparent" %}
Collection NFT {% .font-bold %}
{% /node %}
{% node #metadata-pda-1 parent="metadata-1" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-1" x=360 %}
{% node #mint-2 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-2" y=-230 %}
{% node #metadata-2 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node #metadata-2-collection theme="orange" z=1 %}
Collection

\- Key \
\- Verified = **True**

{% /node %}
{% node label="Use" /%}
{% node label="CollectionDetails = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-2" x=-10 y=-40 theme="transparent" %}
Regular NFT {% .font-bold %}

Attached to a collection
{% /node %}
{% node #metadata-pda-2 parent="metadata-2" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-2" x=360 %}
{% node #mint-3 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-3" y=-230 %}
{% node #metadata-3 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node label="Collection = None" theme="orange" z=1 /%}
{% node label="Use" /%}
{% node label="CollectionDetails = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-3" x=-10 y=-40 theme="transparent" %}
Regular NFT {% .font-bold %}

With no collection
{% /node %}
{% node #metadata-pda-3 parent="metadata-3" x="-100" label="PDA" theme="crimson" /%}

{% edge from="mint-1" to="metadata-pda-1" theme="dimmed" /%}
{% edge from="metadata-pda-1" to="metadata-1" path="straight" theme="dimmed" /%}
{% edge from="mint-2" to="metadata-pda-2" theme="dimmed" /%}
{% edge from="metadata-pda-2" to="metadata-2" path="straight" theme="dimmed" /%}
{% edge from="mint-3" to="metadata-pda-3" theme="dimmed" /%}
{% edge from="metadata-pda-3" to="metadata-3" path="straight" theme="dimmed" /%}
{% edge from="metadata-2-collection" to="mint-1" theme="orange" /%}

{% /diagram %}

## Creating Collection NFTs

_Coming soon..._

{% dialect-switcher title="Create a Collection NFT" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { generateSigner, percentAmount } from '@metaplex-foundation/umi'
import { createNft } from '@metaplex-foundation/mpl-token-metadata'

const collectionMint = generateSigner(umi)
await createNft(umi, {
  mint: collectionMint,
  name: 'My Collection',
  uri: 'https://example.com/my-collection.json',
  sellerFeeBasisPoints: percentAmount(5.5), // 5.5%
  isCollection: true,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

## Nested Collection NFTs

_Coming soon..._

{% diagram %}

{% node %}
{% node #mint-1 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-1" y=-230 %}
{% node #metadata-1 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node label="Collection = None" theme="orange" z=1 /%}
{% node label="Use" /%}
{% node label="CollectionDetails = Some" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-1" x=-10 y=-40 theme="transparent" %}
Collection NFT {% .font-bold %}

Root collection
{% /node %}
{% node #metadata-pda-1 parent="metadata-1" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-1" x=360 %}
{% node #mint-2 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-2" y=-230 %}
{% node #metadata-2 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node #metadata-2-collection theme="orange" z=1 %}
Collection

\- Key \
\- Verified = **True**

{% /node %}
{% node label="Use" /%}
{% node label="CollectionDetails = Some" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-2" x=-10 y=-40 theme="transparent" %}
Collection NFT {% .font-bold %}

Nested collection
{% /node %}
{% node #metadata-pda-2 parent="metadata-2" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-2" x=360 %}
{% node #mint-3 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-3" y=-230 %}
{% node #metadata-3 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node #metadata-3-collection theme="orange" z=1 %}
Collection

\- Key \
\- Verified = **True**

{% /node %}
{% node label="Use" /%}
{% node label="CollectionDetails = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-3" x=-10 y=-40 theme="transparent" %}
Regular NFT {% .font-bold %}

Attached to a collection
{% /node %}
{% node #metadata-pda-3 parent="metadata-3" x="-100" label="PDA" theme="crimson" /%}

{% edge from="mint-1" to="metadata-pda-1" theme="dimmed" /%}
{% edge from="metadata-pda-1" to="metadata-1" path="straight" theme="dimmed" /%}
{% edge from="mint-2" to="metadata-pda-2" theme="dimmed" /%}
{% edge from="metadata-pda-2" to="metadata-2" path="straight" theme="dimmed" /%}
{% edge from="mint-3" to="metadata-pda-3" theme="dimmed" /%}
{% edge from="metadata-pda-3" to="metadata-3" path="straight" theme="dimmed" /%}
{% edge from="metadata-2-collection" to="mint-1" theme="orange" /%}
{% edge from="metadata-3-collection" to="mint-2" theme="orange" /%}

{% /diagram %}

## Verifying Collection NFTs

_Coming soon..._

{% callout title="EXTREMELY IMPORTANT" type="warning" %}

Explorers, Wallets and Marketplaces, **MUST CHECK** that `Verified` is `true`. Verified can only be set true if the Authority on the Collection NFT has run one of the Token Metadata `Verify` instructions over the NFT.

This is the same pattern as the `Creators` field where `Verified` must be true to validate the NFT.

In Order to check if a collection is valid on an NFT, it **MUST** have a collection struct set with:

- The `key` field matching the mint address of the appropriate collection parent.
- The `verified` field set to `true`.

If those two steps are not followed you could be exposing fraudulent NFTs on real collections.
{% /callout %}

{% diagram %}

{% node %}
{% node #mint-1 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-1" y=-230 %}
{% node #metadata-1 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node label="Collection = None" theme="orange" z=1 /%}
{% node label="Use" /%}
{% node theme="orange" z=1 %}
CollectionDetails = **Some**
{% /node %}
{% /node %}
{% node parent="metadata-1" x=-10 y=-25 theme="transparent" %}
Collection NFT {% .font-bold %}
{% /node %}
{% node #metadata-pda-1 parent="metadata-1" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-1" x=360 %}
{% node #mint-2 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-2" y=-230 %}
{% node #metadata-2 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node #metadata-2-collection theme="mint" z=1 %}
Collection

\- Key \
\- Verified = **True**

{% /node %}
{% node label="Use" /%}
{% node label="CollectionDetails = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-2" x=-10 y=-55 theme="transparent" %}
Verified NFT {% .font-bold .text-emerald-600 %}

The Collection NFT verified this NFT \
so we know for sure it is part of it.
{% /node %}
{% node #metadata-pda-2 parent="metadata-2" x="-100" label="PDA" theme="crimson" /%}

{% node parent="mint-2" x=360 %}
{% node #mint-3 label="Mint Account" theme="blue" /%}
{% node label="Owner: Token Program" theme="dimmed" /%}
{% /node %}
{% node parent="mint-3" y=-230 %}
{% node #metadata-3 label="Metadata Account" theme="crimson" /%}
{% node label="Owner: Token Metadata Program" theme="dimmed" /%}
{% node label="..." /%}
{% node label="Token Standard" /%}
{% node #metadata-3-collection theme="red" z=1 %}
Collection

\- Key \
\- Verified = **False**

{% /node %}
{% node label="Use" /%}
{% node label="CollectionDetails = None" theme="orange" z=1 /%}
{% /node %}
{% node parent="metadata-3" x=-10 y=-55 theme="transparent" %}
Unverified NFT {% .font-bold .text-red-500 %}

This could be anyone's NFT pretending \
to be part of this collection.
{% /node %}
{% node #metadata-pda-3 parent="metadata-3" x="-100" label="PDA" theme="crimson" /%}

{% edge from="mint-1" to="metadata-pda-1" theme="dimmed" /%}
{% edge from="metadata-pda-1" to="metadata-1" path="straight" theme="dimmed" /%}
{% edge from="mint-2" to="metadata-pda-2" theme="dimmed" /%}
{% edge from="metadata-pda-2" to="metadata-2" path="straight" theme="dimmed" /%}
{% edge from="mint-3" to="metadata-pda-3" theme="dimmed" /%}
{% edge from="metadata-pda-3" to="metadata-3" path="straight" theme="dimmed" /%}
{% edge from="metadata-2-collection" to="mint-1" theme="mint" /%}
{% edge from="metadata-3-collection" to="mint-1" theme="red" path="straight" /%}

{% /diagram %}

### Verify

_Coming soon..._

{% dialect-switcher title="Verify a Collection NFT" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { verifyCollectionV1 } from '@metaplex-foundation/mpl-token-metadata'

await verifyCollectionV1(umi, {
  metadata,
  collectionMint,
  authority: collectionAuthority,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}

### Unverify

_Coming soon..._

{% dialect-switcher title="Unverify a Collection NFT" %}
{% dialect title="JavaScript" id="js" %}

```ts
import { unverifyCollectionV1 } from '@metaplex-foundation/mpl-token-metadata'

await unverifyCollectionV1(umi, {
  metadata,
  collectionMint,
  authority: collectionAuthority,
}).sendAndConfirm(umi)
```

{% /dialect %}
{% /dialect-switcher %}
