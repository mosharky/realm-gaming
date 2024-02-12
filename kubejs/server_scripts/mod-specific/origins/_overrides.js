ServerEvents.highPriorityData(e => {
    // feline nightvision fix
    e.addJson('origin:powers/cat_vision.json', {
        loading_priority: 10,
        type: 'origins:active_self',
        key: { key: 'key.origins.primary_active' },
        entity_action: {
            type: 'origins:if_else',
            condition: {
                type: 'origins:status_effect',
                effect: 'minecraft:night_vision'
            },
            if_action: {
                type: 'origins:clear_effect',
                effect: 'minecraft:night_vision',
            },
            else_action: {
                type: 'origins:apply_effect',
                effect: {
                    effect: 'minecraft:night_vision',
                    duration: 2147483646,
                    is_ambient: true,
                    show_particles: false,
                    show_icon: false
                }
            }
        }
    })

    // carnivore fix
    e.addJson('origins:powers/carnivore.json', {
        loading_priority: 10,
        type: 'origins:prevent_item_use',
        item_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:or',
                    inverted: true,
                    conditions: [
                        {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:meat' }
                        },
                        { type: 'kubejs:meat' }
                    ],
                },
                { type: 'origins:food' },
                {
                    type: 'origins:ingredient',
                    inverted: true,
                    ingredient: { tag: 'origins:ignore_diet' },
                }
            ]
        }
    })

    // vegetarian fix
    e.addJson('origins:powers/vegetarian.json', {
        loading_priority: 10,
        type: 'origins:prevent_item_use',
        item_condition: {
            type: 'origins:and',
            conditions: [
                {
                    type: 'origins:or',
                    inverted: true,
                    conditions: [
                        {
                            type: 'origins:ingredient',
                            ingredient: { tag: 'kubejs:vegetarian' }
                        },
                        { type: 'kubejs:vegetarian' }
                    ]
                },
                { type: 'origins:food' },
                {
                    type: 'origins:ingredient',
                    inverted: true,
                    ingredient: { tag: 'origins:ignore_diet' },
                }
            ]
        }
    })
})


ServerEvents.tags('item', e => {
    e.add('kubejs:meat', [
        '#alexscaves:raw_meats',
        '#crabbersdelight:cooked_seafood',
        '#crabbersdelight:raw_seafood',
        '#forge:cooked_fishes',
        '#forge:raw_fishes',
        '#minecraft:fishes',
        '#origins:meat',
        'aether_redux:mouse_ear_soup',
        'alexscaves:cooked_lanternfish',
        'alexscaves:cooked_mussel',
        'alexscaves:cooked_radgill',
        'alexscaves:cooked_trilocaris_tail',
        'alexscaves:cooked_tripodfish',
        'alexscaves:deep_sea_sushi_roll',
        'alexscaves:dinosaur_nugget',
        'alexscaves:lanternfish',
        'alexscaves:mussel',
        'alexscaves:primordial_soup',
        'alexscaves:radgill',
        'alexscaves:sea_pig',
        'alexscaves:seething_stew',
        'alexscaves:slam',
        'alexscaves:stinky_fish',
        'alexscaves:trilocaris_tail',
        'alexscaves:tripodfish',
        'alexscaves:vesper_stew',
        'alexscaves:vesper_wing',
        'alexsmobs:blobfish',
        'alexsmobs:cooked_catfish',
        'alexsmobs:cooked_kangaroo_meat',
        'alexsmobs:cooked_moose_ribs',
        'alexsmobs:cosmic_cod',
        'alexsmobs:flying_fish',
        'alexsmobs:kangaroo_burger',
        'alexsmobs:kangaroo_meat',
        'alexsmobs:maggot',
        'alexsmobs:moose_ribs',
        'alexsmobs:rainbow_jelly',
        'alexsmobs:raw_catfish',
        'alexsmobs:shrimp_fried_rice',
        'alexsmobs:sopa_de_macaco',
        'ancient_aether:buffalo_rib',
        'ancient_aether:buffalo_ribs',
        'ancient_aether:cooked_buffalo_ribs',
        'aquamirae:cooked_spinefish',
        'aquamirae:esca',
        'aquamirae:fin',
        'aquamirae:poseidons_breakfast',
        'aquamirae:sea_casserole',
        'aquamirae:sea_stew',
        'aquamirae:sharp_bones',
        'aquamirae:spinefish',
        'betterend:end_fish_cooked',
        'betterend:end_fish_raw',
        'brewinandchewin:ham_and_cheese_sandwich',
        'brewinandchewin:kippers',
        'brewinandchewin:supreme_pizza_slice',
        'cataclysm:amethyst_crab_meat',
        'cataclysm:blessed_amethyst_crab_meat',
        'cataclysm:lionfish',
        'crabbersdelight:bisque',
        'crabbersdelight:clam_bake',
        'crabbersdelight:clam_chowder',
        'crabbersdelight:clawster',
        'crabbersdelight:cooked_clam_meat',
        'crabbersdelight:cooked_clawster',
        'crabbersdelight:cooked_crab',
        'crabbersdelight:cooked_shrimp',
        'crabbersdelight:cooked_tropical_fish_slice',
        'crabbersdelight:cooked_tropical_fish_slice',
        'crabbersdelight:cooked_tropical_fish',
        'crabbersdelight:crab_cakes',
        'crabbersdelight:crab_legs',
        'crabbersdelight:crab',
        'crabbersdelight:fish_stick',
        'crabbersdelight:fish_stick',
        'crabbersdelight:raw_clam_meat',
        'crabbersdelight:seafood_gumbo',
        'crabbersdelight:shrimp_skewer',
        'crabbersdelight:shrimp',
        'crabbersdelight:stuffed_nautilus_shell',
        'crabbersdelight:surf_and_turf',
        'crabbersdelight:tropical_fish_slice',
        'create:sweet_roll',
        'deep_aether:cooked_aerglow_fish',
        'deep_aether:cooked_quail',
        'deep_aether:raw_aerglow_fish',
        'deep_aether:raw_quail',
        'eidolon:withered_heart',
        'eidolon:zombie_heart',
        'endersdelight:crawling_sandwich',
        'endersdelight:crispy_skewer',
        'endersdelight:ender_paella_wood',
        'endersdelight:ender_paella',
        'endersdelight:endermite_stew_wood',
        'endersdelight:endermite_stew',        
        'endersdelight:mite_crust',
        'endersdelight:pearl_pasta_wood',
        'endersdelight:pearl_pasta',
        'endersdelight:shulker_filet',
        'endersdelight:shulker_mollusk',
        'endersdelight:strange_eclair',
        'endersdelight:stuffed_shulker_bowl',
        'endersdelight:twisted_cereal_wood',
        'endersdelight:twisted_cereal',
        'endersdelight:uncanny_cookies',
        'enlightened_end:cooked_stalker',
        'enlightened_end:raw_stalker',
        'enlightened_end:squished_bouncer',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:bacon',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:barbecue_stick',
        'farmersdelight:beef_patty',
        'farmersdelight:beef_stew',
        'farmersdelight:bone_broth',
        'farmersdelight:chicken_cuts',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:chicken_soup',
        'farmersdelight:cod_roll',
        'farmersdelight:cod_slice',
        'farmersdelight:cooked_bacon',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_mutton_chops',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:dog_food',
        'farmersdelight:fish_stew',
        'farmersdelight:grilled_salmon',
        'farmersdelight:ham',
        'farmersdelight:hamburger',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:minced_beef',
        'farmersdelight:mutton_chops',
        'farmersdelight:mutton_wrap',
        'farmersdelight:noodle_soup',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:ratatouille',
        'farmersdelight:roast_chicken',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:salmon_roll',
        'farmersdelight:salmon_slice',
        'farmersdelight:shepherds_pie',
        'farmersdelight:smoked_ham',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:steak_and_potatoes',
        'galosphere:preserved_flesh',
        'galosphere:salted_jerky',
        'goated:chevon',
        'goated:cooked_chevon',
        'hauntedharvest:succotash',
        'iceandfire:fire_dragon_flesh',
        'iceandfire:ice_dragon_flesh',
        'iceandfire:lightning_dragon_flesh',
        'letfishlove:cod_roe',
        'letfishlove:pufferfish_roe',
        'letfishlove:salmon_roe',
        'letfishlove:tropical_fish_roe',
        'minecraft:beef',
        'minecraft:chicken',
        'minecraft:cod',
        'minecraft:cooked_beef',
        'minecraft:cooked_chicken',
        'minecraft:cooked_cod',
        'minecraft:cooked_mutton',
        'minecraft:cooked_porkchop',
        'minecraft:cooked_rabbit',
        'minecraft:cooked_salmon',
        'minecraft:mutton',
        'minecraft:porkchop',
        'minecraft:pufferfish',
        'minecraft:rabbit_stew',
        'minecraft:rabbit',
        'minecraft:rotten_flesh',
        'minecraft:salmon',
        'minecraft:spider_eye',
        'minecraft:tropical_fish',
        'miners_delight:arthropod',
        'miners_delight:baked_cod_stew_cup',
        'miners_delight:baked_squid',
        'miners_delight:baked_tentacles',
        'miners_delight:bat_cookie',
        'miners_delight:bat_rolls',
        'miners_delight:bat_soup_cup',
        'miners_delight:bat_soup',
        'miners_delight:bat_wing',
        'miners_delight:beef_stew_cup',
        'miners_delight:bone_broth_cup',
        'miners_delight:bowl_of_stuffed_squid',
        'miners_delight:chicken_soup_cup',
        'miners_delight:cooked_arthropod',
        'miners_delight:fish_stew_cup',
        'miners_delight:glow_ink_pasta',
        'miners_delight:glow_squid',
        'miners_delight:improvised_barbecue_stick',
        'miners_delight:insect_sandwich',
        'miners_delight:insect_stew_cup',
        'miners_delight:insect_stew',
        'miners_delight:insect_stew',
        'miners_delight:insect_wrap',
        'miners_delight:noodle_soup_cup',
        'miners_delight:pumpkin_soup_cup',
        'miners_delight:rabbit_stew_cup',
        'miners_delight:seasoned_arthropods',
        'miners_delight:seasoned_arthropods',
        'miners_delight:smoked_bat_wing',
        'miners_delight:squid_sandwich',
        'miners_delight:squid',
        'miners_delight:takoyaki',
        'miners_delight:tentacles',
        'nethersdelight:grilled_strider',
        'nethersdelight:ground_strider',
        'nethersdelight:hoglin_ear',
        'nethersdelight:hoglin_loin',
        'nethersdelight:hoglin_sirloin',
        'nethersdelight:nether_skewer',
        'nethersdelight:plate_of_stuffed_hoglin_ham',
        'nethersdelight:plate_of_stuffed_hoglin_roast',
        'nethersdelight:plate_of_stuffed_hoglin_snout',
        'nethersdelight:strider_moss_stew',
        'nethersdelight:strider_slice',
        'nethersdelight:warped_moldy_meat',
        'rats:cooked_rat',
        'rats:potato_knishes',
        'rats:rat_burger',
        'rats:ratfish',
        'rats:raw_rat',
    ])


    // vegetarian
    e.add('kubejs:vegetarian', [
        'aether_redux:blue_swet_jelly',
        'aether_redux:blueberry_pie',
        'aether_redux:chromaberry',
        'aether_redux:enchanted_blueberry_pie',
        'aether_redux:glowbuds',
        'aether_redux:golden_swet_jelly',
        'aether_redux:lightroot_clump',
        'aether_redux:lightroot_clump',
        'aether_redux:luxbuds',
        'aether_redux:oat_muffin',
        'aether_redux:oats',
        'aether_redux:purified_glowbuds',
        'aether_redux:purified_luxbuds',
        'aether_redux:quickroot',
        'aether_redux:sweetblossom',
        'aether_redux:vanilla_gummy_swet',
        'aether_redux:vanilla_swet_jelly',
        'aether:blue_berry',
        'aether:blue_gummy_swet',
        'aether:candy_cane',
        'aether:enchanted_berry',
        'aether:gingerbread_man',
        'aether:golden_gummy_swet',
        'aether:white_apple',
        'alexscaves:darkened_apple',
        'alexscaves:green_soylent',
        'alexscaves:pine_nuts',
        'alexscaves:serene_salad',
        'alexscaves:spelunkie',
        'alexsmobs:banana',
        'alexsmobs:boiled_emu_egg',
        'alexsmobs:gongylidia',
        'alexsmobs:mosquito_repellent_stew',
        'ancient_aether:grapes',
        'betterend:amber_root_raw',
        'betterend:blossom_berry_jelly',
        'betterend:blossom_berry',
        'betterend:bolux_mushroom_cooked',
        'betterend:cave_pumpkin_pie',
        'betterend:chorus_mushroom_cooked',
        'betterend:chorus_mushroom_raw',
        'betterend:shadow_berry_cooked',
        'betterend:shadow_berry_jelly',
        'betterend:shadow_berry_raw',
        'betterend:sweet_berry_jelly',
        'betterend:umbrella_cluster_juice',
        'betternether:agave_medicine',
        'betternether:black_apple',
        'betternether:herbal_medicine',
        'betternether:hook_mushroom_cooked',
        'betternether:stalagnate_bowl_apple',
        'betternether:stalagnate_bowl_mushroom',
        'betternether:stalagnate_bowl_wart',
        'brewinandchewin:cheese_pizza_slice',
        'brewinandchewin:cheesy_pasta',
        'brewinandchewin:cocoa_fudge',
        'brewinandchewin:creamy_onion_soup',
        'brewinandchewin:flaxen_cheese_wedge',
        'brewinandchewin:kimchi',
        'brewinandchewin:mead',
        'brewinandchewin:pickled_pickles',
        'brewinandchewin:saccharine_rum',
        'brewinandchewin:scarlet_cheese_wedge',
        'brewinandchewin:scarlet_pierogies',
        'brewinandchewin:vegetable_omelet',
        'cobblemon:braised_vivichoke',
        'cobblemon:energy_root',
        'cobblemon:leek_and_potato_stew',
        'cobblemon:medicinal_leek',
        'cobblemon:roasted_leek',
        'cobblemon:vivichoke_dip',
        'crabbersdelight:kelp_shake',
        'create:chocolate_glazed_berries',
        'create:honeyed_apple',
        'deep_aether:blue_squash_slice',
        'deep_aether:goldenleaf_berries',
        'deep_aether:green_squash_slice',
        'deep_aether:purple_squash_slice',
        'domesticationinnovation:rotten_apple',
        'domesticationinnovation:sinister_carrot',
        'eidolon:fungus_sprouts',
        'eidolon:grape_candy',
        'eidolon:red_candy',
        'eidolon:warped_sprouts',
        'endersdelight:chorus_juice',
        'endersdelight:chorus_pie_slice',
        'endersdelight:chorus_stew_wood',
        'endersdelight:chorus_stew',
        'enlightened_end:ancient_root',
        'enlightened_end:azure_berries',
        'enlightened_end:bubble_jelly_bottle',
        'enlightened_end:chorus_soup',
        'enlightened_end:elevibloom',
        'enlightened_end:frost_fruit',
        'enlightened_end:glow_gourd_slice',
        'farmersdelight:apple_cider',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:cabbage_leaf',
        'farmersdelight:cabbage_rolls',
        'farmersdelight:cabbage',
        'farmersdelight:cake_slice',
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:cooked_rice',
        'farmersdelight:dumplings',
        'farmersdelight:egg_sandwich',
        'farmersdelight:fried_egg',
        'farmersdelight:fried_rice',
        'farmersdelight:fruit_salad',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:honey_cookie',
        'farmersdelight:kelp_roll_slice',
        'farmersdelight:kelp_roll',
        'farmersdelight:melon_popsicle',
        'farmersdelight:mixed_salad',
        'farmersdelight:mushroom_rice',
        'farmersdelight:nether_salad',
        'farmersdelight:onion',
        'farmersdelight:pie_crust',
        'farmersdelight:pumpkin_slice',
        'farmersdelight:raw_pasta',
        'farmersdelight:stuffed_potato',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:sweet_berry_cookie',
        'farmersdelight:tomato_sauce',
        'farmersdelight:tomato',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:vegetable_soup',
        'farmersdelight:wheat_dough',
        'galosphere:golden_lichen_cordyceps',
        'galosphere:lichen_cordyceps',
        'hauntedharvest:candy_corn',
        'hauntedharvest:corn_on_the_cob',
        'hauntedharvest:cornbread',
        'hauntedharvest:grim_apple',
        'hauntedharvest:popcorn',
        'hauntedharvest:rotten_apple',
        'kawaiidishes:beijinho',
        'kawaiidishes:brigadeiro',
        'kawaiidishes:coffee_fruit',
        'kawaiidishes:cookie_of_unbinding',
        'kiwiboi:kiwicake',
        'minecraft:apple',
        'minecraft:baked_potato',
        'minecraft:beetroot_soup',
        'minecraft:beetroot',
        'minecraft:bread',
        'minecraft:cake',
        'minecraft:carrot',
        'minecraft:chorus_fruit',
        'minecraft:cookie',
        'minecraft:dried_kelp',
        'minecraft:glow_berries',
        'minecraft:golden_carrot',
        'minecraft:melon_slice',
        'minecraft:mushroom_stew',
        'minecraft:poisonous_potato',
        'minecraft:potato',
        'minecraft:pumpkin_pie',
        'minecraft:sweet_berries',
        'miners_delight:baked_cave_carrot',
        'miners_delight:beetroot_soup_cup',
        'miners_delight:cave_carrot',
        'miners_delight:cave_soup_cup',
        'miners_delight:cave_soup',
        'miners_delight:copper_carrot',
        'miners_delight:moss',
        'miners_delight:mushroom_stew_cup',
        'miners_delight:pasta_with_veggieballs',
        'miners_delight:silverfish_eggs',
        'miners_delight:vegan_hamburger',
        'miners_delight:vegan_patty',
        'miners_delight:vegan_steak_and_potatoes',
        'miners_delight:vegan_wrap',
        'miners_delight:vegetable_soup_cup',
        'miners_delight:weird_caviar',
        'nethersdelight:magma_gelatin',
        'nethersdelight:propelpearl',
        'quark:ancient_fruit',
        'rats:assorted_vegetables',
        'rats:blue_cheese',
        'rats:herb_bundle',
        'rats:plague_stew',
        'rats:potato_pancake',
        'rats:string_cheese',
        'rats:treacle',
        'regions_unexplored:duskmelon_slice',
        'regions_unexplored:hanging_earlight_fruit',
        'regions_unexplored:meadow_sage',
        'regions_unexplored:salmonberry',
        'snowyspirit:candy_cane',
        'snowyspirit:eggnog',
        'snowyspirit:gingerbread_cookie',
        'supplementaries:candy',
        'supplementaries:pancake',
        'twilightforest:experiment_115',
        'twilightforest:maze_wafer',
    ])


    e.add('origins:ignore_diet', [
        'aether:healing_stone',
        'alexsmobs:fish_oil',
        'aquamirae:sweet_lance',
        'botania:mana_bottle',
        'botania:mana_cookie',
        'brewinandchewin:beer',
        'brewinandchewin:bloody_mary',
        'brewinandchewin:dread_nog',
        'brewinandchewin:egg_grog',
        'brewinandchewin:glittering_grenadine',
        'brewinandchewin:mead',
        'brewinandchewin:pale_jane',
        'brewinandchewin:red_rum',
        'brewinandchewin:rice_wine',
        'brewinandchewin:saccharine_rum',
        'brewinandchewin:salty_folly',
        'brewinandchewin:steel_toe_stout',
        'brewinandchewin:strongroot_ale',
        'brewinandchewin:vodka',
        'brewinandchewin:withering_dross',
        'create:bar_of_chocolate',
        'create:builders_tea',
        'iceandfire:ambrosia',
        'iceandfire:pixie_dust',
        'iwannaskate:energy_drink',
        'minecraft:enchanted_golden_apple',
        'minecraft:golden_apple',
        'minecraft:honey_bottle',
        'minecraft:suspicious_stew',
        'obscure_api:vial_of_knowledge',
        'supplementaries:soap',
    ])


    // debug
    // Ingredient.of(/.*/).itemIds.forEach(item => {
    //     if (Item.of(item).isEdible() && !Item.of(item).hasTag('kubejs:vegetarian') && !Item.of(item).hasTag('kubejs:meat') && !Item.of(item).hasTag('origins:ignore_diet')) {
    //         console.log(item)
    //     }
    // })
})
