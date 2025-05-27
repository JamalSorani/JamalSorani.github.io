'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "64f1aecce42c2ab3e0b5b4556b2381e1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5ccdba6ecbe3f042766582a13381c853",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "78586e7ba37a38c2f0f5210f15d34047",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23ecb59bb2872bd2870dbe2eae172020",
".git/logs/refs/heads/main": "38887ac9fbeb2e6804334d74d460ed99",
".git/logs/refs/remotes/origin/main": "f9529e5ac51fa5b59dcfcbd31451fdd6",
".git/objects/00/92f6b57d312983f0d96562673798e4c0a3f640": "186dbca7d4362ad2009f2c2ca275ea76",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/a6cea2638b0b6571db19a1137813a722e20d31": "5badd20cdcfa654a9b72a69e066f408f",
".git/objects/0c/01a14d6174cdf9bcf02f625041c28e1ac0cd2e": "ad575d7768d2b9351f5fb5013bb7fc94",
".git/objects/10/cfbe326c0b34d1ed9cbd61c9b5ad107d5d7d70": "2068f8b017811ab14af0c471be9dea6b",
".git/objects/13/870229227dfed25c5f4968bf934c27a9b8d614": "73b007898114d413e3a90f0823656599",
".git/objects/13/c6d1c233e76241e59cfaf7223ad8f01cbd235b": "721354a88ba556e446384410dfc4713a",
".git/objects/15/6cfb04667c4a77df7809d0decb6e0fcf99e64f": "21f45c75cb07f427ac232c71f7273796",
".git/objects/16/1184aa0004276594c0194420c3e3826de18205": "cf68b8c3558c10a1288dc72e6c7d5f9b",
".git/objects/18/6f50a555890471d2498e8cecbe93444492d7b6": "a54fc6c40758809c8baf09aab9af2212",
".git/objects/1c/5405f916d3bf2670d581c62e001148ec991489": "cbe48ec12f53d54218d8d26a71982cae",
".git/objects/21/79eef83cf969d220db7f879df268b40103f76a": "ea7811babd4a2dbfc6a5697720561540",
".git/objects/24/dd3a1829d783f049f05f5ad65c19506dec258a": "8751a479e044d56461e268098d372f59",
".git/objects/25/0a6a7ce56237144086f03884d73846b88ea2fe": "331acd74c0fa9bdd0eaf6beedf57c50f",
".git/objects/28/afeb30339aba41bce7ebbf38d701b9a7b15f9a": "03f4f6a278941257db7e0ecdaa9d8f4f",
".git/objects/29/d7ea35c4f2842e9b0ba8e3c2c783fb02687dec": "64da268179158cc0737c5f74368fc717",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/90b3f6653ee2f71fea39536dc1f0e48fc9bc0b": "9aa4d579de7542ec736903c5c4164482",
".git/objects/2f/d9cd677a28b4681ff2bda76d27555a966b3d09": "601f8b0d56d43bdabf38223383452d78",
".git/objects/32/e014b49df062dceb40824b3d77fdb9e6b59d52": "af2cefc8c57c5f48165ff4c95cbc8e08",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/934f464780c81665616e0cb67fc887eb76ea71": "666f4a2042a167f822a1a6da946835c1",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/ca13b448e59dfb0d56e980216bb9e6f7935c64": "64137b15afc7f60e10fa8d3dbbe22e92",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/38/fcaec21928ad7238cdff22663151fb5d43d456": "7585519933ecee84138616b5bbbb4a68",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/d1582da3e93ead6573e1c7d8eae4cad34f90e9": "3eeb3afd326cec55c5ea78b266b5104a",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/48/fc1718a0cb63391fae00c5fac6eb8b846bb659": "a52a417c5966b889fbcfe7c234d32fae",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/83c580504bb87ad6a4d822c64589b6ba65bab6": "4879bf41d7e7461e2d81f2e38c3a3a3d",
".git/objects/4c/1039ae7a602be9b1d42bce642aa55a690b9249": "8b38175527022d9b994a1b97b94373bd",
".git/objects/4e/da79147557b4911ffbc0797c0d5e8c7d154d09": "4cd87a9952bc1e8b59160d4c1c4fce95",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/073c3c1caedc394b83dd4ea4ff24231fa16f60": "6916c221820106e862d3a37f783d94b4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/a39cea6ca0123d8f43986e49a905478522b61a": "9c81c4d65c532e585caa8342ff534044",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/e09cbfcb1ed0ab0ffd8248028b25a650c39679": "2e663f1f395d9a0e0af45311a44551de",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/6178dc98dabe8766baf5646da74e526762b564": "174e6c194526de479da8e080c3d2081e",
".git/objects/66/b65b848852904d91fa95686c5d3d80da80954c": "9a9cf03f7ca055bf1adef13a19aa4937",
".git/objects/67/120f84712e5d77c3583ba2821235c075e09f7e": "d0bd7e91776bf1827f35d6c39b5fa7c4",
".git/objects/68/d9ca17c585b066d6e123357d9bf7eaa4a9a361": "3d0936306e9edc818969e8aa566fe6e9",
".git/objects/75/c6a9a29d58fd9f1f5ab78b0f5c7237836a7a51": "9f9f98fc02239ca0354c24bdf95e9ec2",
".git/objects/75/d93c8f23cecad1c06505a09fc045b0db31a0bb": "68f53c5a3d7a2cb3deba13da8fc0418d",
".git/objects/7a/d7030c8e65f660a804e1e23ddf97be4749bc66": "c9df00107e8826411c6a5486ad39d1ef",
".git/objects/7e/ab43021db22d314b795b54414d2ac8fc9d50cb": "5f6c09db79975d49d79450fa46f9caf5",
".git/objects/7f/428639a7e45f40aaf9a38bcb0fc10167d0d26b": "1a6d8dc27d4667f46fbd613b3243943f",
".git/objects/82/b30f101e590f53ef4295cd59c4beb87382ef28": "7cac92f6ff54a6946e327093782c1896",
".git/objects/83/b0a29b426fba8572f85ec461d813fdd5bda658": "b65dbc3f33f9b8a0b275d2af2ea01ec8",
".git/objects/86/b0e4994da0f236038923d77e4f835ebb447422": "6edb09955b54646115fd9b402491c761",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b977162f3c5deff88baf484fff073df99e9608": "f47c7591d70bdb655c22c75658d3ba40",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/5c31d771e3dc265791e15e71c6d9c09621a725": "6185ff23f5139c6fe1760f902cf4fcc5",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/cf9bfaf13a4588d2b64e34084eee6be0ae89b9": "9abc4e3bc1efc408f70f82e0f5fea6bf",
".git/objects/99/a3deebb910dc45153010409928f98608c6f68c": "83330ef4b367d1ec383c698c558439e9",
".git/objects/9c/64ccb8785181c32136c5b39a2d13ce7550d0c3": "8b0d5bab08443a93ebe59e871fb4db4b",
".git/objects/a0/06fe428579a968b05fee15b8bc41a87be1e74d": "aade7384f5e2cabeec5d7e9a790aa8ca",
".git/objects/a2/5a20422db01179e6180a3f3795639314a5f0f6": "96d428852d38bde6bb2bc5b4219f15a7",
".git/objects/a2/aa589d8cc53d11a6cf01e34ed9f639c9dfcac4": "4e8f97ce33bccb50c11a3b4b99842571",
".git/objects/a5/1bffcf82b45f9d81e37cc2cf9c1cd0c76c850b": "2d044d4e6e7c4d3ff037ddbd199e2dfb",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/ea13a5b94863c705a9b519e6efe8c4ef58420f": "04abd472cd9ec6500bd09da2eb0b4a55",
".git/objects/ab/099b7d155abc70ad01929bed1603ec271c7f13": "aff30d9e456b3787ca719b1df6d78b99",
".git/objects/ab/7fbd5f44b3641072cf4e7cde18d3fe0aa56b9f": "d15b7453552daf808949b5bf3a0152cd",
".git/objects/ad/ab8bbfc384e86f02c88ea8a3e9ed8c4feadcdb": "c742f08868d6966a9da4e6af520059f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/2f28d142086e7b33c69766005961ce9d73660f": "84224067e8082fbbef06b725e19b8642",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/b9f425b08ffd2c3b7a4632751c21ebc5a6c418": "aa89e184f86ef61c26f7fb94bcbda899",
".git/objects/ca/3271358ad82586bac33235075f49250903aed0": "bb9e9286bbcbe4de85165760433db325",
".git/objects/ca/a2e1ded2d6130372c0ba76bf962866ab71f8f1": "386cb3de8e0ce4afafba48d578d0d0af",
".git/objects/cb/0175b2ea2db87e0aae7ca0ad7b79baedcfcfb7": "bc79c2c148b374798cbebeec405b4a82",
".git/objects/ce/772b2f67d95743b5279a03c220377ecc2c69a2": "5010c987a51d4491ba69666d9c090cf1",
".git/objects/cf/4734f3df76e7f1e9f68d4595e8285de8047f4a": "4083858b4d297b465856f9e71928e17e",
".git/objects/d2/b3c09e0f0082b0f03e070c7b91de15472bd2dd": "9b5cfa7fcfabbf9ff273c730c29cd7cb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/63c5bde68adb2dc7d80a0b93967b358aec7571": "153a615d785c28b7a6bdc86eca1e35b0",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/df/32c809081c355317d25f09b81b3df9f9da03ff": "b2f94712ef43134a4fd10942d2e86fb8",
".git/objects/e7/12bf6f65e5c362da00f785cd7231fce0a1897e": "0997bd0964648c4e592d3d9e8c469a6a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/9455819dc6df942fbf7d442d6b585b2f0196df": "847b0377ce39f3757a72c6b60800e4a4",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/c670bb6de5dd7ddd0c49d0d32ad478d03d2e24": "ae462c0c77c3a55a94229cbcead4805f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/c38b158afa591718673511ae81c14c1adab2f2": "c0b7f5d6b688ec30476bf7b788265b78",
".git/objects/f7/602d8bef3c8c3fe57d224e883ffb2cb61f364e": "3e9a45a3c89bdf50a4d02075a8d26cfa",
".git/ORIG_HEAD": "bcdaeec871077367cf2785b224928e59",
".git/refs/heads/main": "bcdaeec871077367cf2785b224928e59",
".git/refs/remotes/origin/main": "bcdaeec871077367cf2785b224928e59",
"assets/AssetManifest.bin": "a530bad731b6776b40cf18a1da253e5a",
"assets/AssetManifest.bin.json": "16e94bd2c7f7b736ffb2f2665146ee63",
"assets/AssetManifest.json": "f98af592200012f587e5bf7493e6de85",
"assets/assets/icons/books.svg": "4a9ccb72eb9949bd8e47a99dc481ee92",
"assets/assets/icons/cart-shopping.svg": "c06ebae95a41def618b0d232fa565cdb",
"assets/assets/icons/chevron-down.svg": "5536c24c18bf700ed898b69def5fb887",
"assets/assets/icons/courthouse.svg": "b6bce3821643b006458984ea3eb99c93",
"assets/assets/icons/facebook.svg": "58ce3b52d928c44e321f38a71ef042e3",
"assets/assets/icons/filter.svg": "72abd4584f90f9f1bd9e16ef2c21cea2",
"assets/assets/icons/instagram.svg": "29c83a13ebe27182333c539ef530243e",
"assets/assets/icons/linkedin.svg": "28a3d465938a086441673b3f5458afa8",
"assets/assets/icons/Mail.svg": "d22519a0e5b57ff521c1995f0bd7b55f",
"assets/assets/icons/Map%2520pin.svg": "2369aad5ac96ac264a34104bf5fc3dd4",
"assets/assets/icons/Phone.svg": "7436bd52f5f0c47e7e9a4184339546b1",
"assets/assets/icons/profile-circle.svg": "8378a6fe18b4dfc29793192943c70493",
"assets/assets/icons/root_header_logo.svg": "d31300c5698fe550ac1158dec0bc04c4",
"assets/assets/icons/search.svg": "9a98943c21f9c76b482aa2bf2339c77b",
"assets/assets/icons/Subtract.svg": "39a034d1c942f2b7dad752f3c5d05006",
"assets/assets/icons/tweter.svg": "da348dbbc412e9a5a157eb87b40a3237",
"assets/assets/icons/Vector%25202.svg": "c4131b65619d5b4dc5aa4311c40f8021",
"assets/assets/images/footer.svg": "678358fc6b8f883eb8d262e70bc27371",
"assets/assets/images/stage_bg.png": "b63f004b92f201b8520cf6e9884d923b",
"assets/assets/images/Subtract.svg": "39a034d1c942f2b7dad752f3c5d05006",
"assets/assets/l10n/ar.json": "48ef64b3a6c82fb3c169df1f0b9cb1a5",
"assets/assets/l10n/en.json": "2c2597e3e9ae0a7faf8909d637aa57fb",
"assets/FontManifest.json": "3b23f83da01eab8a796db6eb053e057d",
"assets/fonts/MaterialIcons-Regular.otf": "9ca6fbc706a8ab79c97511e7f4bdd216",
"assets/NOTICES": "02613bf9b317df3b52e9a3fa28829627",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e4c20f6dc4e1e28e9ac734fbcf3cb0da",
"assets/packages/elkood_about_app/fonts/bukra.ttf": "41db0a1456c6f5553a23137851d3f37a",
"assets/packages/elkood_about_app/lib/src/assets/image/logo.svg": "9294d13faa4c9f7012576f5c74ba62f6",
"assets/packages/elkood_about_app/lib/src/assets/image/logo_elkood.svg": "3b05ccf62d37ea2cd5eedaf32c2db477",
"assets/packages/elkood_about_app/lib/src/assets/image/text_tech.svg": "c2c4f4e59fd76e63ce42e0263e8f1acf",
"assets/packages/elkood_about_app/lib/src/assets/logo.png": "eb994a715afd1be4a383026e8f420460",
"assets/packages/elkood_check_version/translations/ar.json": "e80083d20f3f6bb2f0c928a4af27dec5",
"assets/packages/elkood_check_version/translations/en.json": "58a8fe95b7739cecc7ac2816538e273e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "55a0fd4574c6d8e87457893fc46a87d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "00bceebcd72bbda62cdad71dc240e066",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "774e10602aec967e940c2c6b0355de74",
"/": "774e10602aec967e940c2c6b0355de74",
"main.dart.js": "078d762d8aeb41c49ab084c5f7bd30c0",
"manifest.json": "1df4cac06b333c7ed8d8247694391cb8",
"version.json": "3f4e54e8587a3b97f6e1782fe95a9713"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
