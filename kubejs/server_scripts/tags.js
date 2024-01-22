//priority: 10

// item tags
ServerEvents.tags('item', e => {
    e.add('forge:cheeses/normal', 'brewinandchewin:flaxen_cheese_wedge')
    e.add('forge:cheeses/nether', 'brewinandchewin:scarlet_cheese_wedge')
    e.add('forge:storage_blocks/cheese', 'brewinandchewin:flaxen_cheese_wheel')
    e.add('forge:storage_blocks/nether_cheese', 'brewinandchewin:scarlet_cheese_wheel')
    e.add('curios:body', /aether:.*cape.*/)
    e.add('forge:plates', [
        'createdeco:zinc_sheet',
    ])
    e.add('forge:plates/zinc', 'createdeco:zinc_sheet',)

    e.remove('minecraft:copper_ores', [
        'ad_astra:mars_diamond_ore',
        'ad_astra:venus_diamond_ore'
    ])
    e.add('minecraft:diamond_ores', [
        'ad_astra:mars_diamond_ore',
        'ad_astra:venus_diamond_ore'
    ])

    e.remove('c:iron_ingots', 'betternether:cincinnasite_ingot')
    e.add('forge:ores/redstone', 'betternether:nether_redstone_ore')

    e.add('forge:boxes/shulker', global.ironShulkerBoxes)
    e.add('minecraft:shulker_boxes', global.ironShulkerBoxes)

    // origins
    let caveDwarfFoods = [
        'galosphere:lichen_cordyceps',
        'galosphere:golden_lichen_cordyceps',
        'galosphere:salted_jerky',
        'galosphere:preserved_flesh',
    ]
    Ingredient.of('@miners_delight').itemIds.forEach(item => {
        if (Item.of(item).isEdible()) caveDwarfFoods.push(item)
    })
    e.add('kubejs:cave_dwarf_foods', caveDwarfFoods)

})

// block tags
ServerEvents.tags('block', e => {
    // fixing frozen grass being placed on top of snowrealmagic:snow
    e.remove('regions_unexplored:snow_plant_can_survive_on', '#minecraft:snow')
    e.add('regions_unexplored:snow_plant_can_survive_on', [
        'minecraft:snow',
        'minecraft:snow_block'
    ])

    e.add('snowrealmagic:containables', [
        '#regions_unexplored:grass',
    ])

    e.add('forge:boxes/shulker', global.ironShulkerBoxes)
    e.add('minecraft:shulker_boxes', global.ironShulkerBoxes)
})

ServerEvents.tags('fluid', e => {
    e.removeAllTagsFrom('embers:molten_bronze')
    e.removeAllTagsFrom('cofh_core:honey')
    e.add('forge:molten_zinc', 'kubejs:molten_zinc')
    e.add('forge:molten_brass', 'kubejs:molten_brass')
    e.add('embers:ingot_tooltip', [
        'kubejs:molten_zinc',
        'kubejs:molten_brass',
        'createbigcannons:molten_bronze'
    ])
})

ServerEvents.tags('entity_type', e => {
    e.removeAll('supplementaries:cage_catchable')
    e.add('supplementaries:cage_catchable', [
        'minecraft:allay',
        'minecraft:axolotl',
        'minecraft:bat',
        'minecraft:bee',
        'minecraft:camel',
        'minecraft:cat',
        'minecraft:chicken',
        'minecraft:cow',
        'minecraft:dolphin',
        'minecraft:donkey',
        'minecraft:enderman',
        'minecraft:endermite',
        'minecraft:fox',
        'minecraft:frog',
        'minecraft:glow_squid',
        'minecraft:goat',
        'minecraft:horse',
        'minecraft:iron_golem',
        'minecraft:llama',
        'minecraft:magma_cube',
        'minecraft:mooshroom',
        'minecraft:mule',
        'minecraft:ocelot',
        'minecraft:panda',
        'minecraft:parrot',
        'minecraft:pig',
        'minecraft:polar_bear',
        'minecraft:rabbit',
        'minecraft:sheep',
        'minecraft:silverfish',
        'minecraft:skeleton_horse',
        'minecraft:slime',
        'minecraft:sniffer',
        'minecraft:snow_golem',
        'minecraft:squid',
        'minecraft:strider',
        'minecraft:trader_llama',
        'minecraft:turtle',
        'minecraft:vex',
        'minecraft:wolf',
        'minecraft:zombie_horse',
        'ad_astra:glacian_ram',
        'alexsmobs:grizzly_bear',
        'alexsmobs:roadrunner',
        'alexsmobs:gazelle',
        'alexsmobs:crocodile',
        'alexsmobs:fly',
        'alexsmobs:hummingbird',
        'alexsmobs:orca',
        'alexsmobs:sunbird',
        'alexsmobs:gorilla',
        'alexsmobs:rattlesnake',
        'alexsmobs:endergrade',
        'alexsmobs:hammerhead_shark',
        'alexsmobs:lobster',
        'alexsmobs:komodo_dragon',
        'alexsmobs:capuchin_monkey',
        'alexsmobs:warped_toad',
        'alexsmobs:moose',
        'alexsmobs:raccoon',
        'alexsmobs:blobfish',
        'alexsmobs:seal',
        'alexsmobs:cockroach',
        'alexsmobs:shoebill',
        'alexsmobs:elephant',
        'alexsmobs:snow_leopard',
        'alexsmobs:crow',
        'alexsmobs:alligator_snapping_turtle',
        'alexsmobs:mungus',
        'alexsmobs:mantis_shrimp',
        'alexsmobs:emu',
        'alexsmobs:platypus',
        'alexsmobs:tasmanian_devil',
        'alexsmobs:kangaroo',
        'alexsmobs:bald_eagle',
        'alexsmobs:tiger',
        'alexsmobs:tarantula_hawk',
        'alexsmobs:seagull',
        'alexsmobs:toucan',
        'alexsmobs:maned_wolf',
        'alexsmobs:anaconda',
        'alexsmobs:anteater',
        'alexsmobs:rocky_roller',
        'alexsmobs:flutter',
        'alexsmobs:gelada_monkey',
        'alexsmobs:jerboa',
        'alexsmobs:terrapin',
        'alexsmobs:comb_jelly',
        'alexsmobs:bunfungus',
        'alexsmobs:bison',
        'alexsmobs:giant_squid',
        'alexsmobs:skelewag',
        'alexsmobs:rain_frog',
        'alexsmobs:potoo',
        'alexsmobs:mudskipper',
        'alexsmobs:rhinoceros',
        'alexsmobs:sugar_glider',
        'alexsmobs:farseer',
        'alexsmobs:skunk',
        'alexsmobs:banana_slug',
        'alexsmobs:blue_jay',
        'alexsmobs:caiman',
        'alexsmobs:triops',
        'alexsmobs:cosmaw',
        'alexsmobs:laviathan',
        'alexsmobs:mimicube',
        'alexsmobs:sea_bear',
        'alexsmobs:stradpole',
        'alexsmobs:tusklin',
        'alexscaves:ferrouslime',
        'alexscaves:gammaroach',
        'alexscaves:gloomoth',
        'alexscaves:notor',
        'alexscaves:radgill',
        'alexscaves:raycat',
        'aquamirae:luminous_jelly',
        'aquamirae:golden_moth',
        'aqupdcaracal:caracal',
        'betterend:cubozoa',
        'betterend:dragonfly',
        'betterend:end_slime',
        'betterend:silk_moth',
        'betternether:firefly',
        'betternether:skull',
        'cataclysm:endermaptera',
        'corpse:corpse',
        'creeperoverhaul:mushroom_creeper',
        'endermanoverhaul:badlands_enderman',
        'endermanoverhaul:cave_enderman',
        'endermanoverhaul:crimson_forest_enderman',
        'endermanoverhaul:dark_oak_enderman',
        'endermanoverhaul:desert_enderman',
        'endermanoverhaul:end_enderman',
        'endermanoverhaul:end_islands_enderman',
        'endermanoverhaul:flower_fields_enderman',
        'endermanoverhaul:ice_spikes_enderman',
        'endermanoverhaul:mushroom_fields_enderman',
        'endermanoverhaul:nether_wastes_enderman',
        'endermanoverhaul:ocean_enderman',
        'endermanoverhaul:savanna_enderman',
        'endermanoverhaul:snowy_enderman',
        'endermanoverhaul:soulsand_valley_enderman',
        'endermanoverhaul:swamp_enderman',
        'endermanoverhaul:warped_forest_enderman',
        'endermanoverhaul:windswept_hills_enderman',
        'endermanoverhaul:scarab',
        'endermanoverhaul:spirit',
        'fennecfox:fennecfox',
        'aether:aerbunny',
        'aether:blue_swet',
        'aether:flying_cow',
        'aether:golden_swet',
        'aether:mimic',
        'aether:moa',
        'aether:phyg',
        'aether:sheepuff',
        'aether:sentry',
        'aether_redux:vanilla_swet',
        'dragonmounts:dragon',
        'eidolon:raven',
        'eidolon:slimy_slug',
        'endertrigon:baby_ender_dragon',
        // 'enlightened_end:bouncer',
        // 'enlightened_end:floating_elevibloom',
        // 'enlightened_end:radiator',
        // 'enlightened_end:ringling',
        'galosphere:spectre',
        'galosphere:sparkle',
        'galosphere:specterpillar',
        'goated:geep',
        'kiwiboi:kiwi',
        'rats:demon_rat',
        'rats:dutchrat',
        'rats:feral_ratlantean',
        'rats:ghost_pirat',
        'rats:neo_ratlantean',
        'rats:pied_piper',
        'rats:pirat',
        'rats:rat',
        'rats:ratfish',
        'rats:tamed_rat',
        'snuffles:snuffle',
        // 'twilightforest:bighorn_sheep',
        // 'twilightforest:boar',
        // 'twilightforest:carminite_ghastling',
        // 'twilightforest:deer',
        // 'twilightforest:dwarf_rabbit',
        // 'twilightforest:helmet_crab',
        // 'twilightforest:kobold',
        // 'twilightforest:maze_slime',
        // 'twilightforest:penguin',
        // 'twilightforest:raven',
        // 'twilightforest:squirrel',
        // 'twilightforest:swarm_spider',
        // 'twilightforest:tiny_bird',
        // 'twilightforest:towerwood_borer',
        'undergarden:gloomper',
        'undergarden:gwib',
        'undergarden:mog',
        'undergarden:muncher',
        'undergarden:rotling',
        'undergarden:scintling',
        'undergarden:sploogie',
        'railways:conductor',
    ])
})