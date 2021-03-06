if (PlantProblem.find().count() === 0) {
	
	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Symptoms appear first as water-soaked stripes at the margin of fully developed leaves. Lesions enlarge both in length and width. Margins are wavy and turn light brown in a few days. Regions adjoining the healthy part has a water-soaked appearance. Lesions may start at one or both edges of the leaves and as the disease advances, the lesions cover the entire blade, turn grayish, and later white. Appearance of milky or ”opaque dew drops” on the surface of young lesions in the morning is a sign of bacterial blight infection. The milky dew drops dry to form small, amber-colored beads and these spheres are the ooze of the bacterial mass. Infection at seedling stage develop “Kresek” or wilting of whole leaves or the entire plant.',
		description: '',
		plant_affected: 'Rice',
		order: '',
		classification: 'Bacterial',
		treatment: 'Use of resistant varieties together with modified cultural practices to disrupt the disease cycle and proper deployment of resistant varieties in the field. Use balanced amounts of plant nutrients, especially nitrogen. Keep fields clean. Remove weed hosts and plow under rice stubble, straw, rice ratoons and volunteer seedlings, which can serve as hosts of bacteria.',
		sci_name: 'Xanthomonas oryzae pv. oryzae',
		fil_name: '',
		eng_name: 'Bacterial Leaf Blight',
		name: 'Bacterial Leaf Blight'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Infected plants show browning and drying of leaves. Initially appear as small, water-soaked, linear lesions between leaf veins. These streaks are initially dark green and later become light brown to yellowish gray. The lesions are translucent when held against the light. Entire leaves may become brown and die when the disease is very severe.',
		description: '',
		plant_affected: 'Rice',
		order: '',
		classification: 'Bacterial',
		treatment: 'Use of resistant to the disease varieties of rice. Treat seeds with hot water. Keep fields clean—remove weed hosts and plow under rice stubble, straw, rice ratoons, and volunteer seedlings, which may be infected by the bacteria. Use balanced amounts of plant nutrients, especially nitrogen.',
		sci_name: 'Xanthomonas oryzae pv. oryzicola',
		fil_name: '',
		eng_name: 'Bacterial Leaf Streak',
		name: 'Bacterial Leaf Streak'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Lesions are linear, 3 to 5 mm in length, about 1 to 1.5 mm in width along the leaf axis. Center of the spot is dark brown, the border fading toward the outer margin of the spot. Sheath lesions are the same as those on the leaf or may be longer. In resistant varieties, the lesions are uniformly red-brown throughout  and very narrow; in susceptible varieties the spots are wider with a narrow light-brown or gray-brown center',
		description: '',
		plant_affected: 'Rice',
		order: '',
		classification: 'Fungal',
		treatment: 'Use of resistant to the disease varieties of rice. Remove weeds and weedy rice in the field and nearby areas to remove alternate hosts that allow the fungus to survive and infect new rice crops. Use balanced nutrients, make sure that adequate potassium is used. If narrow brown spot poses a risk to the field, spray propiconazole at booting to heading stages.',
		sci_name: 'Cercospora oryzae',
		fil_name: '',
		eng_name: 'Narrow Brown Spot, Narrow Leaf Spot, Cercospora Leaf Spot',
		name: 'Narrow Leaf Spot'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'On the leaves (usually during the seedling stage), the spots are spindle shaped, pointed at both ends, often showing a brownish margin. Lesions are often found near the uppermost node. Grayish-brown lesions are formed and the neck is girdled, causing the head or panicle to fall over.',
		description: '',
		plant_affected: 'Rice',
		order: '',
		classification: 'Fungal',
		treatment: 'Use of resistant varieties. Advisable to raise seedlings in lowland conditions because it has been observed that seedlings raised in upland nurseries are more susceptible to blast even after transplanting. Reduce nitrogenous fertilizer application to prevent severe outbreak of blast in susceptible varieties. Several recommended fungicides are available against rice blast.',
		sci_name: 'Magnaporthe oryzae',
		fil_name: '',
		eng_name: 'Rice Blast',
		name: 'Rice Blast'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Alternating bands of irregular blotches on the leaf sheath, leaf blade and ear husks starting from the base upward. Blotches are grayish-green, with bluish gray or traw colored centers with distinct brown borders. Presence of irregular, white turning light to dark brown sclerotia on the dead ares is the most reliable sign of the disease. Infected ears may be rotten often showing some seed germination at the base of the cob.',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Fungal',
		treatment: 'Practice deep plowing to bury sclerotia. Avoid planting cultivars with very low ear placement. Remove leaf sheath above the infected portion below the earshot. Apply recommended fungicides',
		sci_name: 'Rhizoctonia solani',
		fil_name: '',
		eng_name: 'Banded Leaf and Sheath Blight',
		name: 'Banded Leaf and Sheath Blight'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Surfaces of leaf blades, leaf sheaths and stalks exhibit brown, circular, powdery pustules. Leaves which are severely infected dries up and defoliates prematurely. Those of southern rust are circular to oval, light cinnamon-brown to orange in color and predominantly on the upper-leaf surface. Pustules tend to occur only sparsely on the leaf underside, but may occur abundantly on the leaf sheath. Haloes can be observed in some hybrids around pustules when leaves are backlit. The pustules are usually more densely clustered than those of common rust. And, like common rust, the pustules can darken in color later in the season as the spore type changes.',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Fungal',
		treatment: 'Plow deep to bury scleotia. Some producers avoid disease or minimize its effects by not planting late or by using shorter season hybrids. By doing so, they have a more mature and resistant crop in the field when rust spores arrive and sometimes disease can be completely avoided.',
		sci_name: 'Puccinia polysora',
		fil_name: '',
		eng_name: 'Corn Rust',
		name: 'Corn Rust'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Base of lower leaves have streaks or chlorotic areas where downy growth can be observed early in the morning. Next leaves exhibit more severe symptoms.',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Fungal',
		treatment: 'Reduce nitrogen fertilizer. Plant resistant varieties. Eliminate infected plants. Maintain weed-free field. Use recommended fungicide.',
		sci_name: 'Peronosclerospora philippinensis',
		fil_name: '',
		eng_name: 'Downy Mildew',
		name: 'Downy Mildew'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Lesions on leaves varies in shape and size: elongated or oval tan to bown spots which may merge and develop to burning of large areas of the leaves',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Fungal',
		treatment: 'Planting of resistant varieties. Application of recommended fungicides.',
		sci_name: 'Helminthosporium maydis',
		fil_name: '',
		eng_name: 'Leaf Blight',
		name: 'Leaf Blight'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Rice plants are stunted and have reduced number of tillers. Young emerging leaves develop interveinal chlorosis leading to discoloration of the leaves, starting from tip downwards. Often whole leaf is discolored. Plants infected at an early stage generally die prematurely, infected plants take more time for maturity because of delayed flowering. The panicles are often poorly developed and the grains are also often covered with dark brown blotches.',
		description: '',
		plant_affected: 'Rice',
		order: '',
		classification: 'Viral',
		treatment: 'Synchronized planting with distinct fallow period between cropping. Avoidance of late planting (more than a month after most fields in the area are planted); most of the GLH from the adjacent or nearby fields with older plants will migrate to the newly planted field because GLH prefer younger rice plants, roguing but effective only under low disease. Planting resistant varieties. Destruction of stubble several das after harvest by plowing and harowing to eradicate GLH and possible source of tungro viruses. Observe neighboring fields for presence of tungro and know the variety planted to anticipate future actions. Avoid planting susceptible varieties in areas where Tungro occur in almost all rice varieties. Use insecticides only when needed to save money and the friendly insects (no insecticides are needed in plants more than 60 days old afte transplanting and when no tungro and few GLH are present)',
		sci_name: 'Rice tungro bacilliform virus',
		fil_name: '',
		eng_name: 'Tungro',
		name: 'Tungro'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Small spots surrounded by halo, which develop into rectangular lesions delineated by the veins on both sides which run in parallel.',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Fungal',
		treatment: 'Plant resistant varieties. Apply recommended fungicides.',
		sci_name: 'Cercospora zeae-maydis',
		fil_name: '',
		eng_name: 'Grey Leaf Spot',
		name: 'Grey Leaf Spot'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Galls or boil on aboveground tissues. Galls first appear as glistening white or grayish white swellings. Interior of galls later becomes black and powdery and ontains numerous sooty masses of spores.',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Fungal',
		treatment: 'Use of resistant varieties. Avoid mechanical injury of plants. Proper nutritional management.',
		sci_name: 'Ustilago maydis',
		fil_name: '',
		eng_name: 'Corn Smut',
		name: 'Corn Smut'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Affected tissues are soft and mushy and emit foul odor. Plants usually topple over or may remain standing but exhibit wilted leaves.',
		description: '',
		plant_affected: 'Corn',
		order: '',
		classification: 'Bacterial',
		treatment: 'Cultivate to improve soil condition. Proper nutritional management.',
		sci_name: '',
		fil_name: '',
		eng_name: 'Stalk Rot',
		name: 'Stalk Rot'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Mycelia present on the nodes of infected plants are signs of the pathogen, Infected plants become yellow and begin to wilt at later stages',
		description: 'Infected seedlings are easily identified in the field because they are relatively taller, spindly and pale compared to the healthy seedlings',
		plant_affected: 'Rice',
		order: '',
		classification: 'Fungal',
		treatment: 'Use of Resistant varieties, Seed treatment with recommended fungicides, Gather and burn infected plants or deep plowing to bury and submerge infected stubbles can help reduce sources of inocula',
		sci_name: 'Fusarium moniliforme/Gibberella fujikuroi',
		fil_name: 'Bakanae',
		eng_name: 'Bakanae',
		name: 'Bakanae'
	});
	
	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Characterized by the presence of large spots confined mostly to the leaf sheaths and occasionally on the leaves and stems, Leaf sheaths are entirely rotted sclerotial bodies on the infected parts are irregular in shape in severe cases, Spots are at first greenish-gray and ellipsoid which quickly enlarge and become grayish with blackish-brown margins, Lesions may coalesce to form irregular discolored areas',
		description: 'Infected leaves senesce or dry out and die more rapidly',
		plant_affected: 'Rice',
		order: '',
		classification: 'Fungal',
		treatment: 'Deep plowing to bury and submerge infected stubbles and sclerotia helps reduce sources of inoculum, Several recommended fungicides are available against sheath blight',
		sci_name: 'Rhizoctonia solani',
		fil_name: 'Sheath Blight',
		eng_name: 'Rice Sheath Blight',
		name: 'Sheath Blight'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'On leaves, the spots vary in size and shape from minute dots to circular or oval spots. Similar symptoms can be observed on the leaf sheath of the infected plant, Smaller spots are dark brown or purplish brown. Larger ones have the same color at the edge but maybe pale yellow, dirty white, brown or gray towards the center, Spots may coalesce so that the entire leaf surface withers and dries up',
		description: 'Brown spot is a fungal disease that infects the coleoptile, leaves, leaf sheath, panicle branches, glumes, and spikelets. Its most observable damage are the numerous big spots on the leaves which can kill the whole leaf. When infection occurs in the seed, unfilled grains or spotted or discolored seeds are formed.',
		plant_affected: 'Rice',
		order: '',
		classification: 'Fungal',
		treatment: 'Plant resistant varieties, Use only healthy or clean seeds for planting or treat seeds with recommended fungicides if necessary, Apply muriate of potash to correct the soil deficiency, Spray with recommended fungicides',
		sci_name: 'Helminthosporium oryzae/Cochliobolus miyabeanus',
		fil_name: 'Brown Spot',
		eng_name: 'Helminthosporium Leaf Spot',
		name: 'Brown Spot'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Typical sheath rot lesion starts at the uppermost leaf sheath enclosing the young panicles, Usually several spots are observed and these spots enlarge and coalesce or grow together and can cover most of the leaf sheath, Spots appear oblong or as irregular spot with dark reddish, brown margins, and gray center or brownish gray throughout, Affected leaf sheaths may have abundant whitish powdery fungal growth (mycelium) visible on the outer surface, Un-emerged panicles rot and florets turn red-brown to dark brown, Panicles remain within the sheath or may partially emerge',
		description: 'The disease reduces grain yield by retarding or aborting panicle emergence, and producing unfilled seeds and sterile panicles. Sheath Rot also reduces grain quality by causing panicles to rot and grains to become discolored.',
		plant_affected: 'Rice',
		order: '',
		classification: 'Fungal',
		treatment: 'Minimize insect infestation in rice field, Remove infected stubbles after harvest, Apply potash at tillering stage, Apply foliar spray of calcium sulfate and zinc sulfate, Apply a seed treatment fungicide like carbendazim, edifenphos, or mancozeb as seed treatment and foliar spraying at booting stage, Apply a foliar fungicide like benomyl and copper oxychloride as foliar sprays',
		sci_name: 'Sarocladium oryzae',
		fil_name: 'Sheath Rot',
		eng_name: 'Sheath Rot',
		name: 'Sheath Rot'
	});

	//-------------------------------PEST--------------------------------------------------

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Gross feeding damage to foliage, growing points, and young stems. Severe infestation results in total defoliation or destruction of the plant to ground level.',
		description: 'Eggs: Pale-yellowish and becomes dark brown just before hatching. The black head-capsules of the larvae can be seen through the shells. Each egg is about 0.5 mm in diameter, conical with a slightly rounded apex and a densely sculpted surface; Larvae: Develops from grey-green with white-yellow stripes down its back when small, to black with thin blue lines down the middle of the back and yellow-green lines outside the blue lines when fully grown. It measures 2 to 3cm long, has a velvety-black upper surface with pale lateral lines, a green or yellow ventral surface, and no hairs on the body. There are three parallel lines on the dorsal surface of the prothoracic (first body) segment and a stripe running longitudinally down the mid-dorsal surface of the body is always paler than the black pigmentation on either side of it. The head is always shiny-black; Pupa: Mahogany-brown, 10-14mm long, with a smooth, shiny surface; Adult: It is 14-18mm long and has a 29-32mm wing span. The abdomen is covered with pale grey-brown scales (except for the tip in the female which has black hair-scales). Forewings are dark-brown with distinctive grey-black markings. Hindwings are white with dark veins.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: 'Many animals, birds and insects prey on the African armyworm at different stages of its life cycle. These natural enemies should be encouraged by maintaining natural surroundings with plenty of breeding places for them, including trees and shrubs. Night birds and bats feed on the African armyworm moths, and lacewings, wasps, parasitic wasps and spiders eat the caterpillars; Avoid burning and overgrazing of grasslands which are the natural habitat and food store of the caterpillars. Burning often causes outbreaks because as soon as temperatures rise, eggs are laid in large quantities on the fresh new grass.',
		sci_name: 'Spodoptera exempta (Walker)',
		fil_name: '',
		eng_name: 'African Armyworm, Black Armyworm, Nutgrass Armyworm, True Armyworm, Hail Worm, Mystery Armyworm, Rain Worm',
		name: 'Black Armyworm adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Gross feeding damage to foliage, growing points, and young stems. Severe infestation results in total defoliation or destruction of the plant to ground level.',
		description: 'Eggs: Pale-yellowish and becomes dark brown just before hatching. The black head-capsules of the larvae can be seen through the shells. Each egg is about 0.5 mm in diameter, conical with a slightly rounded apex and a densely sculpted surface; Larvae: Develops from grey-green with white-yellow stripes down its back when small, to black with thin blue lines down the middle of the back and yellow-green lines outside the blue lines when fully grown. It measures 2 to 3cm long, has a velvety-black upper surface with pale lateral lines, a green or yellow ventral surface, and no hairs on the body. There are three parallel lines on the dorsal surface of the prothoracic (first body) segment and a stripe running longitudinally down the mid-dorsal surface of the body is always paler than the black pigmentation on either side of it. The head is always shiny-black; Pupa: Mahogany-brown, 10-14mm long, with a smooth, shiny surface; Adult: It is 14-18mm long and has a 29-32mm wing span. The abdomen is covered with pale grey-brown scales (except for the tip in the female which has black hair-scales). Forewings are dark-brown with distinctive grey-black markings. Hindwings are white with dark veins.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: 'Many animals, birds and insects prey on the African armyworm at different stages of its life cycle. These natural enemies should be encouraged by maintaining natural surroundings with plenty of breeding places for them, including trees and shrubs. Night birds and bats feed on the African armyworm moths, and lacewings, wasps, parasitic wasps and spiders eat the caterpillars; Avoid burning and overgrazing of grasslands which are the natural habitat and food store of the caterpillars. Burning often causes outbreaks because as soon as temperatures rise, eggs are laid in large quantities on the fresh new grass.',
		sci_name: 'Spodoptera exempta (Walker)',
		fil_name: '',
		eng_name: 'African Armyworm, Black Armyworm, Nutgrass Armyworm, True Armyworm, Hail Worm, Mystery Armyworm, Rain Worm',
		name: 'Black Armyworm larva'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Egg: Laid in clusters covered with short yellowish brown hairs from the abdominal tips of the female moths. Each egg is pearly white, round, and has a ridged surface; Larva: Brown or green with longitudinal stripes, with black spots ringing the body about one-fourth of the body length behind the head; Adult: Has 15-20mm long grey-brown body, and a wingspan of 30-38mm. The forewings are grey to reddish-brown with a strongly variegated pattern and paler lines along the veins, and the hindwings are greyish-white with grey margins.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: 'Seedbeds should be established far from large areas of weeds, remove weeds from areas outside of fields, and plow all uncultivated land. In insecticides, sprays are more effective than granules. High dosages are required to kill large armyworm and cutworm larvae. Spraying should be done late in the afternoon before the larvae leave their resting places to climb up the plants. Because damage is normally concentrated in discrete areas of a rice field, only areas where damage occurs should be sprayed.',
		sci_name: 'Spodoptera litura (Fabricius)',
		fil_name: '',
		eng_name: 'Common Cutworm, Grass Cutworm, Vegetable Cutworm, Tobacco Cutworm, Tobacco Caterpillar, Taro Caterpillar',
		name: 'Common Cutworm adult'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Egg: Laid in clusters covered with short yellowish brown hairs from the abdominal tips of the female moths. Each egg is pearly white, round, and has a ridged surface; Larva: Brown or green with longitudinal stripes, with black spots ringing the body about one-fourth of the body length behind the head; Adult: Has 15-20mm long grey-brown body, and a wingspan of 30-38mm. The forewings are grey to reddish-brown with a strongly variegated pattern and paler lines along the veins, and the hindwings are greyish-white with grey margins.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: 'Seedbeds should be established far from large areas of weeds, remove weeds from areas outside of fields, and plow all uncultivated land. In insecticides, sprays are more effective than granules. High dosages are required to kill large armyworm and cutworm larvae. Spraying should be done late in the afternoon before the larvae leave their resting places to climb up the plants. Because damage is normally concentrated in discrete areas of a rice field, only areas where damage occurs should be sprayed.',
		sci_name: 'Spodoptera litura (Fabricius)',
		fil_name: '',
		eng_name: 'Common Cutworm, Grass Cutworm, Vegetable Cutworm, Tobacco Cutworm, Tobacco Caterpillar, Taro Caterpillar',
		name: 'Common Cutworm larva'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Egg: Laid in rows along leaves, which fold over and protect the eggs. The pale yellow, spherical eggs can be seen when the leaf blade is unfolded; Larva: Usually light brown or gray green, with a longitudinal dark band midway down the side of the body; Pupa: Shiny, yellowish-brown; Adult: Wing span is 38-48 mm. Forewings are grayish-yellow, with dark-gray or reddish-yellow tint. External wing margin blackened obliquely from top backward, with dark stroke and with a row of dark points. Hindwings are gray, with dark external margin. Antennae are thread-like.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: 'Weeding, inter-row cultivations, removal of crop residues from fields after harvesting, deep autumn plowing, optimal dates of early sowing, cultivation of resistant varieties, insecticide treatments of crops, release of such entomophages as Trichogramma spp.',
		sci_name: 'Mythimna separata (Walker)',
		fil_name: '',
		eng_name: 'Ear-cutting caterpillar, Oriental Armyworm, Northern Armyworm',
		name: 'Ear-cutting Caterpillar adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Egg: Laid in rows along leaves, which fold over and protect the eggs. The pale yellow, spherical eggs can be seen when the leaf blade is unfolded; Larva: Usually light brown or gray green, with a longitudinal dark band midway down the side of the body; Pupa: Shiny, yellowish-brown; Adult: Wing span is 38-48 mm. Forewings are grayish-yellow, with dark-gray or reddish-yellow tint. External wing margin blackened obliquely from top backward, with dark stroke and with a row of dark points. Hindwings are gray, with dark external margin. Antennae are thread-like.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: 'Weeding, inter-row cultivations, removal of crop residues from fields after harvesting, deep autumn plowing, optimal dates of early sowing, cultivation of resistant varieties, insecticide treatments of crops, release of such entomophages as Trichogramma spp.',
		sci_name: 'Mythimna separata (Walker)',
		fil_name: '',
		eng_name: 'Ear-cutting caterpillar, Oriental Armyworm, Northern Armyworm',
		name: 'Ear-cutting Caterpillar larva'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Egg: Laid in small clusters openly on the leaf blades. Each egg is spherical and shiny; Larva: Has two pairs of white or black horns; one pair on their heads and another pair projecting from the abdomen; Adult: Has two white ring spots on the front wing and seven on the back wing of the top side. On the underside, there are three spots on the front wing and six on the back wing, all ringed with violet and yellow circles.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Satyridae',
		classification: '',
		treatment: '',
		sci_name: 'Melanitis leda ismene Cramer',
		fil_name: '',
		eng_name: 'Green Horned Caterpillar (larva), Common Evening Brown (adult)',
		name: 'Greenhorned Caterpillar adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Egg: Laid in small clusters openly on the leaf blades. Each egg is spherical and shiny; Larva: Has two pairs of white or black horns; one pair on their heads and another pair projecting from the abdomen; Adult: Has two white ring spots on the front wing and seven on the back wing of the top side. On the underside, there are three spots on the front wing and six on the back wing, all ringed with violet and yellow circles.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Satyridae',
		classification: '',
		treatment: '',
		sci_name: 'Melanitis leda ismene Cramer',
		fil_name: '',
		eng_name: 'Green Horned Caterpillar (larva), Common Evening Brown (adult)',
		name: 'Greenhorned Caterpillar larva'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Ladder-like appearance on the surface of leaves, leaf cases floating on water, leaves cut at right angles (like being cut with a pair of scissors), leaves with papery upper epidermis (whitish appearance).',
		description: 'Eggs: Pale, yellowish green, circular, somewhat flattened with a smooth surface, laid on the under surfaces of leaves drooping into the water; Larva: Young larva is pale cream, about 1.2 mm long and 0.2 mm across the head, and the head is light yellow. Full grown larva is about 14 mm long and 1.6 mm in diameter, and pale green with a semitransparent skin and light brown prothoracic shield and head; Pupa: 5.5 mm long and 1.5 mm wide, and is cream colored when freshly formed but turns silvery white toward moth emergence; Adult: 6mm long with a wing span of 15mm, white wings are marked with a few light brown to black specks and two or three submarginal fulvous bands.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Pyralidae',
		classification: '',
		treatment: 'Use of correct fertilizer application, plant early and use wider spacing (30 × 20 mm), drain the field, transplant older seedlings (sparse planting can also reduce the damage), grow a ratoon, encourage biological control agents (snails, hydrophilid and dytiscid water beetles, spiders, dragonflies, and birds), use foliar treatments of carbamate insecticides.',
		sci_name: 'Nymphula depunctalis (Guenée)',
		fil_name: '',
		eng_name: 'Rice Caseworm',
		name: 'Rice Caseworm adult'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Eggs: Yellow and develop purple to violet markings as they mature, laid in small clusters on leaf blades; Larva: Moves like inchworms, arching their backs as they go; Adult: Yellow orange with two diagonal, dark red bands on each front wing.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: '',
		sci_name: 'Naranga aenescens (Moore)',
		fil_name: '',
		eng_name: 'Green Semilooper',
		name: 'Rice Green Semilooper adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Eggs: Yellow and develop purple to violet markings as they mature, laid in small clusters on leaf blades; Larva: Moves like inchworms, arching their backs as they go; Adult: Yellow orange with two diagonal, dark red bands on each front wing.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: '',
		sci_name: 'Naranga aenescens (Moore)',
		fil_name: '',
		eng_name: 'Green Semilooper',
		name: 'Rice Green Semilooper larva'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'The first sign of leaffolder infestation is the presence of moths in the field. Longitudinal and transparent whitish streaks on damaged leaves, tubular folded leaves, and leaf tips sometimes fastened to the basal part of leaf are caused by larvae feeding. Severely damaged plants appear burned with many folded leaves. Under heavy attack, a field will appear gray white from a distance.',
		description: 'Eggs: Translucent, yellowish white, oval, 0.90 mm long and 0.39 mm wide, and almost flat with a slightly convex surface; Larva: Young larvae are translucent but turn yellowish green as they mature, head capsules and thoraxes are brown, have one pair of dark spots on the abdomen near the head; Pupa: Light brown, but turns reddish brown toward moth emergence; Adult: 10-12mm long and has wing span of 13-15mm; light brown with shiny, brownish yellow wings adorned with dark, broad margins, and two to three dark vertical stripes; appears triangular when at rest.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Pyralidae',
		classification: '',
		treatment: 'Careful use of nitrogenous fertilizer in split applications is recommended. Removal of grassy weeds from rice fields and surrounding borders prevents the buildup of rice leaffolders on alternate hosts. However, chemical control is the only practical method to control increasing leaffolder infestation during crop growth. Numerous insecticides that have been identified for control are most effective as foliar sprays. But foliar sprays have to be repeated because they are often washed off by frequent rains. Granular insecticides broadcast into water are ineffective. Since leaffolders can attack the crop during any growth stage, fields should be monitored weekly.',
		sci_name: 'Cnaphalocrocis medinalis (Guenée)',
		fil_name: '',
		eng_name: 'Rice Leaffolder',
		name: 'Rice Leaffolder adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'The first sign of leaffolder infestation is the presence of moths in the field. Longitudinal and transparent whitish streaks on damaged leaves, tubular folded leaves, and leaf tips sometimes fastened to the basal part of leaf are caused by larvae feeding. Severely damaged plants appear burned with many folded leaves. Under heavy attack, a field will appear gray white from a distance.',
		description: 'Eggs: Translucent, yellowish white, oval, 0.90 mm long and 0.39 mm wide, and almost flat with a slightly convex surface; Larva: Young larvae are translucent but turn yellowish green as they mature, head capsules and thoraxes are brown, have one pair of dark spots on the abdomen near the head; Pupa: Light brown, but turns reddish brown toward moth emergence; Adult: 10-12mm long and has wing span of 13-15mm; light brown with shiny, brownish yellow wings adorned with dark, broad margins, and two to three dark vertical stripes; appears triangular when at rest.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Pyralidae',
		classification: '',
		treatment: 'Careful use of nitrogenous fertilizer in split applications is recommended. Removal of grassy weeds from rice fields and surrounding borders prevents the buildup of rice leaffolders on alternate hosts. However, chemical control is the only practical method to control increasing leaffolder infestation during crop growth. Numerous insecticides that have been identified for control are most effective as foliar sprays. But foliar sprays have to be repeated because they are often washed off by frequent rains. Granular insecticides broadcast into water are ineffective. Since leaffolders can attack the crop during any growth stage, fields should be monitored weekly.',
		sci_name: 'Cnaphalocrocis medinalis (Guenée)',
		fil_name: '',
		eng_name: 'Rice Leaffolder',
		name: 'Rice Leaffolder larva'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Eggs: Pearl-like, laid singly on leaf blades; Larva: Heads are flat and slanted backward, have reddish vertical bands at each side of the head; Adult: White spots on brown wings, adults rest with their wings upright.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Hesperiidae',
		classification: '',
		treatment: '',
		sci_name: 'Pelopidas mathias (Fabricius)',
		fil_name: '',
		eng_name: 'Rice Skipper, Small Branded Swift, Black Branded Swift, Lesser Millet Skipper',
		name: 'Rice Skipper adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: '',
		description: 'Eggs: Pearl-like, laid singly on leaf blades; Larva: Heads are flat and slanted backward, have reddish vertical bands at each side of the head; Adult: White spots on brown wings, adults rest with their wings upright.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Hesperiidae',
		classification: '',
		treatment: '',
		sci_name: 'Pelopidas mathias (Fabricius)',
		fil_name: '',
		eng_name: 'Rice Skipper, Small Branded Swift, Black Branded Swift, Lesser Millet Skipper',
		name: 'Rice Skipper larva'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Larvae within the stems, signs of a stem being cut by larval feeding, insect excrements in stem, external discoloration and exit holes on the leaf sheath and stem, deadhearts (damage to the tiller before flowering), whiteheads (dry panicles the appear whitish); Egg masses are a sign that plant damage will occur; Large numbers of adult stem borer moths around lights indicate that large numbers of eggs will be laid that evening. ',
		description: 'Eggs: Laid near the tip of the leaf blade. Egg masses are disc-shaped and are covered by a light brown mat of hair from the females’ abdomen; Larva: Unmarked and range from light yellow to white; Adult: Bright white with no markings and has a distinctive tuft of long hairs on the thorax. Both sexes have similar coloration, but the male is smaller. Nocturnal, positively phototropic, and strong fliers.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Pyralidae',
		classification: '',
		treatment: 'Clipping the seedlings before transplanting greatly reduces the carryover of eggs from the seedbed to the transplanted fields. However, stem borers are difficult to control with insecticides. After hatching, the larvae are exposed only for a few hours before they penetrate a tiller or enter the plant. Successful control involves repeated foliar applications with spray volumes more than 400 liters/ha.',
		sci_name: 'Scirpophaga innotata (Walker)',
		fil_name: '',
		eng_name: 'White Stemborer',
		name: 'White Stemborer'
	});
	
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Larvae within the stems, signs of a stem being cut by larval feeding, insect excrements in stem, external discoloration and exit holes on the leaf sheath and stem, deadhearts (damage to the tiller before flowering), whiteheads (dry panicles the appear whitish); Egg masses are a sign that plant damage will occur; Large numbers of adult stem borer moths around lights indicate that large numbers of eggs will be laid that evening. ',
		description: 'Eggs: Laid near the tip of the leaf blade. Egg masses are disc-shaped and are covered by a light brown mat of hair from the females’ abdomen; Larva: Unmarked and range from light yellow to white; Adult: Female is pale yellow or light brown front wings, each with a characteristic single, black spot; male is smaller, gray or light brown, has two rows of small spots at the tip of each front wing. Nocturnal, positively phototropic, and strong fliers.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Pyralidae',
		classification: '',
		treatment: 'Clipping the seedlings before transplanting greatly reduces the carryover of eggs from the seedbed to the transplanted fields. However, stem borers are difficult to control with insecticides. After hatching, the larvae are exposed only for a few hours before they penetrate a tiller or enter the plant. Successful control involves repeated foliar applications with spray volumes more than 400 liters/ha.',
		sci_name: 'Scirpophaga incertulas (Walker)',
		fil_name: '',
		eng_name: 'Yellow Stemborer',
		name: 'Yellow Stemborer adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Larvae within the stems, signs of a stem being cut by larval feeding, insect excrements in stem, external discoloration and exit holes on the leaf sheath and stem, deadhearts (damage to the tiller before flowering), whiteheads (dry panicles the appear whitish); Egg masses are a sign that plant damage will occur; Large numbers of adult stem borer moths around lights indicate that large numbers of eggs will be laid that evening. ',
		description: 'Eggs: Laid near the tip of the leaf blade. Egg masses are disc-shaped and are covered by a light brown mat of hair from the females’ abdomen; Larva: Unmarked and range from light yellow to white; Adult: Female is pale yellow or light brown front wings, each with a characteristic single, black spot; male is smaller, gray or light brown, has two rows of small spots at the tip of each front wing. Nocturnal, positively phototropic, and strong fliers.',
		plant_affected: 'Rice',
		order: 'Lepidoptera: Pyralidae',
		classification: '',
		treatment: 'Clipping the seedlings before transplanting greatly reduces the carryover of eggs from the seedbed to the transplanted fields. However, stem borers are difficult to control with insecticides. After hatching, the larvae are exposed only for a few hours before they penetrate a tiller or enter the plant. Successful control involves repeated foliar applications with spray volumes more than 400 liters/ha.',
		sci_name: 'Scirpophaga incertulas (Walker)',
		fil_name: '',
		eng_name: 'Yellow Stemborer',
		name: 'Yellow Stemborer larva'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Presence of larvae on food plants, presence of pupae in cocoon attached to underside of leaves, and skeletonized leaves by larval feeding.',
		description: 'Egg: White to pale green and shiny, dome-shaped with 28-32 vertical ribs from the micropyle to the base; Larva: About 40 mm wingspan and 15-18 mm long, forewing gold to bronze in ground color and has two silver oval spots that are similar in size; Pupa About 20 mm long, pale green ventrally with a dark brown dorsal stripe, or body entirely brown; Adult: About 40 mm wingspan and 15-18 mm long; forewing gold to bronze in ground color and has two silver oval spots that are similar in size.',
		plant_affected: 'Corn',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: '',
		sci_name: 'Chrysodeixis chalcites Esper',
		fil_name: '',
		eng_name: 'Corn Semilooper, Tomato Looper, Green Gardern Looper (larva); Golden Twin Spot (adult)',
		name: 'Corn Semilooper adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Presence of larvae on food plants, presence of pupae in cocoon attached to underside of leaves, and skeletonized leaves by larval feeding.',
		description: 'Egg: White to pale green and shiny, dome-shaped with 28-32 vertical ribs from the micropyle to the base; Larva: About 40 mm wingspan and 15-18 mm long, forewing gold to bronze in ground color and has two silver oval spots that are similar in size; Pupa About 20 mm long, pale green ventrally with a dark brown dorsal stripe, or body entirely brown; Adult: About 40 mm wingspan and 15-18 mm long; forewing gold to bronze in ground color and has two silver oval spots that are similar in size.',
		plant_affected: 'Corn',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: '',
		sci_name: 'Chrysodeixis chalcites Esper',
		fil_name: '',
		eng_name: 'Corn Semilooper, Tomato Looper, Green Gardern Looper (larva); Golden Twin Spot (adult)',
		name: 'Corn Semilooper larva'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Feeding damage on leaves and in the whorl; boring in the stems, tassels, ears and midribs which can lead to lodging, breaking of tassels, and dropping of ears.',
		description: '',
		plant_affected: 'Corn',
		order: 'Lepidoptera: Crambidae',
		classification: '',
		treatment: '',
		sci_name: 'Ostrinia furnacalis Guenee',
		fil_name: '',
		eng_name: 'Asian/Oriental Cornborer',
		name: 'Asian Cornborer adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Eggs are laid on the silks, larvae invade the cobs and developing grain is consumed. Secondary bacterial infections are common.',
		description: 'Egg: pale green when first deposited, becoming yellowish and then gray with time; shape varies from slightly dome-shaped to a flattened sphere, and measures about 0.5-0.6 mm in diameter and 0.5 mm in height; Larva: Full-grown larvae are about 30-40 mm long; the head is brown and mottled; the prothoracic and supra-anal plates and legs are pale-brown, only claws and spiracles remaining black; the final body segment is elongated; Pupa: mahogany-brown in color, and measures 17 to 22 mm in length and 5.5 mm in width; Adult:  has wingspan of 32-45mm; forewings are usually yellowish brown in color, and often bear a small dark spot centrally; forewing also may bear a broad dark transverse band distally, but the margin of the wing is not darkened; hind wings are creamy white basally and blackish distally, and usually bear a small dark spot centrally.',
		plant_affected: 'Corn',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: '',
		sci_name: 'Helicoverpa armigera Hubner',
		fil_name: '',
		eng_name: 'Corn Earworm, Cotton Bollwormm, Tobacco Budworm (larva); Scarce Bordered Straw (adult)',
		name: 'Corn Earworm adult'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Eggs are laid on the silks, larvae invade the cobs and developing grain is consumed. Secondary bacterial infections are common.',
		description: 'Egg: pale green when first deposited, becoming yellowish and then gray with time; shape varies from slightly dome-shaped to a flattened sphere, and measures about 0.5-0.6 mm in diameter and 0.5 mm in height; Larva: Full-grown larvae are about 30-40 mm long; the head is brown and mottled; the prothoracic and supra-anal plates and legs are pale-brown, only claws and spiracles remaining black; the final body segment is elongated; Pupa: mahogany-brown in color, and measures 17 to 22 mm in length and 5.5 mm in width; Adult:  has wingspan of 32-45mm; forewings are usually yellowish brown in color, and often bear a small dark spot centrally; forewing also may bear a broad dark transverse band distally, but the margin of the wing is not darkened; hind wings are creamy white basally and blackish distally, and usually bear a small dark spot centrally.',
		plant_affected: 'Corn',
		order: 'Lepidoptera: Noctuidae',
		classification: '',
		treatment: '',
		sci_name: 'Helicoverpa armigera Hubner',
		fil_name: '',
		eng_name: 'Corn Earworm, Cotton Bollwormm, Tobacco Budworm (larva); Scarce Bordered Straw (adult)',
		name: 'Corn Earworm larva'
	});

	//FREI
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Stunting, wilting on the plant and linear lesions on the leaves with wavy edges caused by Stewart\'s Wilt. ',
		description: 'Corn flea beetle is a very tiny (1.8 mm), black, shiny beetles with elongated hind legs, which are used for jumping when disturbed.',
		plant_affected: 'Corn',
		order: 'Coleoptera',
		classification: '',
		treatment: 'Cut off their food supply by delaying transplanting or planting by a couple weeks if possible. Corn flea beetle feeding may be reduced with the use of insecticidal seed treatments and foliar insecticides.',
		sci_name: 'Chaetocnema pulicaria',
		fil_name: '',
		eng_name: 'Corn Flea Beetle, Clover Flea Beetle',
		name: 'Corn Flea Beetle'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'The leaf of the plant becomes membranous and dry.',
		description: 'Small, metallic blue beetles with a series of black dots on the elytra. It measures 1/4th to 1/5th of an inch in length and 1/8th inch in width.',
		plant_affected: 'Rice',
		order: 'Coleoptera: Chrysomelidae: Hispinae',
		classification: '',
		treatment: 'Deep and thorough ploughing of the field and crop rotation will be a great help. It is also possible to pluck the infected leaves in minor infection and uproot the whole plant in case of major infection.',
		sci_name: 'Leptispa Pygmaea',
		fil_name: '',
		eng_name: 'Rice Blue Beetle',
		name: 'Leptispa'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'There will be increased moisture levels and heating on the surface due to the weevil\'s respiration. Seeds with round holes are formed by exiting adults.',
		description: 'A small weevil that is usually 1/10 inch (2 to 3 mm) in size and stout in appearance. It is reddish-brown to black in color with four light yellow or reddish spots on the corners of the elytra. The snout is long (1 mm), almost 1/3 of the total length.',
		plant_affected: 'Rice',
		order: 'Coleoptera : Curculionidae',
		classification: '',
		treatment: 'Control of these insects by seed treatments is reliant on either the adults, in the case of cypermethrin, or larvae, when triflumuron is used, feeding on the treated grain and hence the insecticide. When feeding on treated grain, insecticide is ingested and the insect is killed.',
		sci_name: 'Sitophilus Oryzae',
		fil_name: '',
		eng_name: 'Rice Weevil',
		name: 'Rice Weevil'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Scraping of the upper surface of the leaf blade leaving only the lower epidermis as white streaks parallel to the midrib. Tunneling of larvae through leaf tissue causes irregular translucent white patches that are parallel to the leaf veins.',
		description: 'It is a small bluish-black beetle fringed with numerous short spines over the body.',
		plant_affected: 'Rice',
		order: 'Coleoptera: Chrysomeloidea: Chrysomelidae',
		classification: '',
		treatment: 'A cultural control method that is recommended for the rice hispa is to avoid over fertilizing the field. Close plant spacing results in greater leaf densities that can tolerate higher hispa numbers. To prevent egg laying of the pests, the shoot tips can be cut. Clipping and burying shoots in the mud can reduce grub populations by 75−92%.',
		sci_name: 'Dicladispa Armigera',
		fil_name: '',
		eng_name: 'Rice Hispa, Spiny Beetle',
		name: 'Rice Hispa'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Because white grubs feed on roots, damage is usually first noticed during dry periods when injured plants cannot get the water they need. Turf often dies in large, irregular-shaped patches.',
		description: 'White grubs are the larval stage of certain beetles, called scarabs. They are fairly large, creme-colored larvae with 3 distinct pairs of legs and an amber-colored head.',
		plant_affected: 'Rice, Corn',
		order: 'Coleoptera: Scarabaeidae',
		classification: '',
		treatment: 'There are a number of natural enemies including predators such as wasps, beetles and ants that control white grubs. Two biological control products that are presently available to the consumer are milky spore disease and parasitic nematodes.',
		sci_name: 'Phyllophaga',
		fil_name: '',
		eng_name: 'White Grub, Scarab Larvae',
		name: 'White Grub Larva'
	});

	//JASON
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Irregular to longitudinal exit holes on leaves. Damage on stems, seeds, roots, and on young panicles of the rice plant. Dreadheart.',
		description: 'Can grow up to an inch long, and are black and brown. They have large hind legs and two cerci (spiky things coming out of the back of their abdomens).',
		plant_affected: 'Rice',
		order: 'Orthoptera',
		classification: '',
		treatment: 'There are no known control practices for this insect.',
		sci_name: 'Euscyrtus Concinnus',
		fil_name: '',
		eng_name: 'Cricket, Gryllids',
		name: 'Field Cricket'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Chewed edges of leaves, flowers or buds, holes in leaves, flowers or buds, gray scar tissue on fruit.',
		description: 'They range in size from as small as 5mm to as large as 130mm. They are usually green, sometimes with brown markings. They have a thick body, usually taller than it is wide, and long thing legs. The hind legs are longer than the front or middle legs, and are often used for jumping. On the head they have chewing mouthparts and long thin antennae that reach back at least to the abdomen of the insect.',
		plant_affected: 'Rice, Corn',
		order: 'Orthoptera',
		classification: '',
		treatment: 'Remove long grass around affected plants to eliminate hiding places. Encourage biological control by attracting their predators to the garden – bats, birds and snakes.',
		sci_name: 'Tettigoniidae',
		fil_name: '',
		eng_name: 'Katydid, Bush Cricket, Long-horned Grasshopper',
		name: 'Katydid'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Both young and adult stages feed upon the leaves and shoots of paddy. They also cut off the ear heads.',
		description: 'The adults are medium sized insects, uniformly greenish and practically without any spot. They measures about 5 cms in length.',
		plant_affected: 'Rice',
		order: 'Orthoptera',
		classification: '',
		treatment: 'Dusting the crop with to 10% BHC or 5% Aldrin is very much effective. Poison baiting is useful both against nymphs and adults. The egg masses are destroyed by ploughing the field and exposing them to birds.',
		sci_name: 'Oxya hyla intricata ',
		fil_name: '',
		eng_name: 'Rice Grasshopper, Short-horned Grasshopper',
		name: 'Short-horned Grasshopper'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Cut out areas on leaves and cut-off panicles. Presence of yellow and brown nymphs and adults feeding on rice foliage.',
		description: 'Large size and absence of prosternal tubercule. Other distinctive characteristics concern the wings: smoky at the apex (radial sector) and black veins in the anal sector.',
		plant_affected: 'Rice',
		order: 'Orthoptera: AcrididaeLarge',
		classification: '',
		treatment: 'Flood the stubbles, shave bunds, sweep along the bunds and pick adults directly from the foliage at night when they are sluggish. Use poison baits from salt water and rice bran. Use foliar sprays to control grashoppers in rice fields. Granules are not effective.',
		sci_name: 'Locusta migratoria manilensis',
		fil_name: '',
		eng_name: 'Oriental Migratory Locust, Asiatic Migratory Locust',
		name: 'Oriental Migratory Locust'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'The crickets usually damage seedlings, feeding aboveground on foliage or stem tissue, and belowground on roots and tubers. Girdling of the stems of seedling plants at the soil surface is a common form of injury, though young plants are sometimes severed and pulled belowground to be consumed. Additional injury to small plants is caused by soil surface tunneling, which may dislodge seedlings or cause them to desiccate.',
		description: 'Mole crickets are cylindrical-bodied insects about 3–5 centimetres (1.2–2.0 in) long, with small eyes and shovel-like forelimbs highly developed for burrowing.',
		plant_affected: 'Rice',
		order: 'Orthoptera',
		classification: '',
		treatment: 'Maintain standing water. Encourage biological control agents: sphecid wasp, carabid beetle, nematodes, and fungus; mole crickets eat each other when they are together because of their cannibalistic behavior.',
		sci_name: 'Gryllotalpa orientalis',
		fil_name: '',
		eng_name: 'Short-winged Mole Cricket, Southern Mole Cricket, Tawny Mole Cricket',
		name: 'Mole Cricket'
	});

	//JV
	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Hopperburn or yellowing, browning and drying of plant, ovipositional marks exposing the plant to fungal and bacterial infections, presence of honeydew and sooty molds in the bases of areas infected, plants with ragged stunt or grassy stunt virus disease.',
		description: 'Adults occur in macropterous (long-winged) and brachypterous (short-winged) forms. The macropterous form is about 3.5 – 4.5 mm in length. The body is brown, and the wings are transparent, with very conspicuous veins. Young nymphs are white, but they gradually become darker in older instars.',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: ' Flood the seedbed, for a day, so that only the tips of seedlings are exposed will control BHP. Sweep small seedbeds with a net to remove some BPH (but not eggs), particularly from dry seed beds. At high BPH densities, sweeping will not remove sufficient numbers of BPH from the base of the plant.',
		sci_name: 'Nilaparvata lugens',
		fil_name: '',
		eng_name: 'Brown Planthopper, Planthopper',
		name: 'Brown Planthopper'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Stunted plants and reduced vigor, reduced number of productive tillers, withering or complete plant drying.',
		description: 'The thickened part of the antennae is very short and ends with a bristle (arista). Two ocelli (simple eyes) are present on the top or front of the head. The tarsi are made of three segments. The femora are at front with, at most, weak spines. The hind tibiae have one or more distinct keels, with a row of movable spines on each, sometimes on enlarged bases.',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: 'Reduce the number of rice crops to two per year and synchronized crop establishment across farms reduces leafhoppers and other insect vectors. Transplant older seedlings (>3 weeks) to reduce viral disease susceptibility transmitted by leafhoppers. Plant early within a given planting period, particularly in the dry season to reduce the risk of insect-vector disease.',
		sci_name: 'Nephotettix malayanus, Nephotettix virescens',
		fil_name: '',
		eng_name: 'Green Leafhopper, Leafhopper, Hopper',
		name: 'Green Leafhopper'
	});	

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Drying of leaf tips, whole leaves become orange and leaf margins become orange and curl.',
		description: 'Zigzag Leafhopper are plant-sucking pest that are usually, brown to white. They are easily recognized by the striped markings on its wings.',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: 'There are parasites and predators that help regulate the population of this insect. Mymarid wasps and the mirid bugs prey on the eggs. Dryinid wasps and pipunculid flies parasitize both the adults and the nymphs and spiders eat the adults.',
		sci_name: 'Recilia dorsalis',
		fil_name: '',
		eng_name: 'Zigzag Leafhopper',
		name: 'Zigzag Leafhopper'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Heavy infestation causes stunted growth, formation of white heads, half-filled or empty grains, and browning of leaves or bug burn. ',
		description: 'It is white and tinged with green and pink and turns shiny brownish black to shiny black as it matures. It is 8-9 mm long. The nymphs are brown or yellow in color. Black spots are visible on their bodies. Different nymphal instars vary in sizes. Six nymphal instars are completed in 29-35 days.',
		plant_affected: 'Rice, Corn',
		order: 'Hemiptera',
		classification: '',
		treatment: 'Maintain a clean field by removing the weeds and drying the rice field during plowing. Plant rice varieties of the same maturity date to break the insect’s cycle. Use of mercury bulbs as light traps for egg-laying adults, light trapping of insects should start 5 days before and after the full moon.',
		sci_name: 'Scotinophara coarctata',
		fil_name: '',
		eng_name: 'Black Bug, Common Black Bug',
		name: 'Black Bug'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Formation of a hollow cavity or tubular gall at the base of the infested tiller. The gall formed is a silvery white hollow tube, 1 cm wide and 10−30 cm long, affected tiller inhibits growth of leaves and fails to produce panicles, deformed, wilted, and rolled leaf, elongation of leaf sheaths, also called onion leaf or silvershoot and plant stunting',
		description: 'Rice Gall Midge are very fragile small insects usually only 2–3 mm in length; many are less than 1 mm long. They are characterised by hairy wings, unusual in the order Diptera, and have long antennae.',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: 'Plow ratoon of the previous crop and remove all off-season plant hosts. Encourage biological control agents: platygasterid, eupelmid, and pteromalid wasps (parasitize the larvae), phytoseiid mites (feed on eggs), spiders (feed on adults).',
		sci_name: 'Orseolia oryzae',
		fil_name: '',
		eng_name: 'Gall Midge, Rice Gall Midge, Asian Gall Midge',
		name: 'Rice Gall Midge'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Wilting, plant stunting, yellowish curled leaves and damaged spots or chakdhora or soorai disease.',
		description: 'Small sap-sucking insect that is observed most frequently for its ovoid, sluggish mature female, about 1 cm (0.4 inch) long.',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: 'Encourage biological control agents: small encyrtid wasps, spiders, chloropid fly, drosophilid, and lady beetles.',
		sci_name: 'Brevennia rehi',
		fil_name: '',
		eng_name: 'Rice Mealy Bug, Mealy Bug',
		name: 'Rice Mealy Bug'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'Small or shriveled grains, deformed or spotty grains, empty grains, erect panicles and foul odor',
		description: 'Leptocorisa acuta adults are long (14-17 mm) and slender (3-4 mm wide). They are a light yellow-green to yellow-brown color. The head is broad, often similar in length and width to the pronotum (upper surface of the first plate on the thorax) and the scutellum (triangular shaped plate on the thorax, posterior to the pronotum).',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: 'Capturing rice bugs, in the early morning or late afternoon, by net can be effective at low rice bug densities, though labor intensive. Encourage biological control agents: Some wasps, grasshoppers and spiders attack rice bugs or rice bug eggs. Indiscriminate insecticide use disrupts biological control, resulting in pest resurgence.',
		sci_name: 'Leptocorisa Varicornis',
		fil_name: '',
		eng_name: 'Rice Paddy Bug, Rice Bug, Paddy Bug',
		name: 'Rice Paddy Bug'
	});

	PlantProblem.insert({
		type: 'Pest',
		symptoms: 'If root aphid infestation is very severe, stunting and leaf yellowing may occur. The stunting can be compared with the damage caused by root grubs.',
		description: 'Fully grown aphids are 1.2 - 2.2 mm long and dark green to grey-brown in colour. Nymphs are lighter in colour with a reddish area at the tip of the abdomen.',
		plant_affected: 'Rice',
		order: 'Hemiptera',
		classification: '',
		treatment: 'Encourage biological control agents or natural enemies that can manage the population of rice root aphids. Both the nymphs and adults are parasitized by a small braconid wasp and a mermithid nematode and are preyed upon by lady beetles.',
		sci_name: 'Tetraneura nigriabdominalis',
		fil_name: '',
		eng_name: 'Rice Root Aphid, Aphid',
		name: 'Rice Root Aphid'
	});
}
