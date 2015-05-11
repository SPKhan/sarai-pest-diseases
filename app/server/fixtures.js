if (PlantProblem.find().count() === 0) {
	
	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Alternating bands of irregular blotches on the leaf sheath, leaf blade and ear husks starting from the base upward. Blotches are grayish-green, with bluish gray or traw colored centers with distinct brown borders. Presence of irregular, white turning light to dark brown sclerotia on the dead ares is the most reliable sign of the disease. Infected ears may be rotten often showing some seed germination at the base of the cob.',
		description: '',
		plant_affected: 'leaf sheath, leaf blade, ear husks',
		order: '',
		classification: 'fungal',
		treatment: 'Practice deep plowing to bury sclerotia. Avoid planting cultivars with very low ear placement. Remove leaf sheath above the infected portion below the earshot. Apply recommended fungicides',
		sci_name: 'Rhizoctonia solani',
		fil_name: '',
		eng_name: 'Banded Leaf and Sheath Blight'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Surfaces of leaf blades, leaf sheaths and stalks exhibit brown, circular, powdery pustules. Leaves which are severely infected dries up and defoliates prematurely. Those of southern rust are circular to oval, light cinnamon-brown to orange in color and predominantly on the upper-leaf surface. Pustules tend to occur only sparsely on the leaf underside, but may occur abundantly on the leaf sheath. Haloes can be observed in some hybrids around pustules when leaves are backlit. The pustules are usually more densely clustered than those of common rust. And, like common rust, the pustules can darken in color later in the season as the spore type changes.',
		description: '',
		plant_affected: 'leaf blade, leaf sheath, stalk',
		order: '',
		classification: 'fungal',
		treatment: 'Plow deep to bury scleotia. Some producers avoid disease or minimize its effects by not planting late or by using shorter season hybrids. By doing so, they have a more mature and resistant crop in the field when rust spores arrive and sometimes disease can be completely avoided.',
		sci_name: 'Puccinia polysora',
		fil_name: '',
		eng_name: 'Corn Rust'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Base of lower leaves have streaks or chlorotic areas where downy growth can be observed early in the morning. Next leaves exhibit more severe symptoms.',
		description: '',
		plant_affected: 'base of lower leaves',
		order: '',
		classification: 'fungal',
		treatment: 'Reduce nitrogen fertilizer. Plant resistant varieties. Eliminate infected plants. Maintain weed-free field. Use recommended fungicide.',
		sci_name: 'Peronosclerospora philippinensis',
		fil_name: '',
		eng_name: 'Downy Mildew'
	});

	PlantProblem.insert({
		type: 'Disease',
		symptoms: 'Lesions on leaves varies in shape and size: elongated or oval tan to bown spots which may merge and develop to burning of large areas of the leaves',
		description: '',
		plant_affected: 'leaves',
		order: '',
		classification: 'fungal',
		treatment: 'Planting of resistant varieties. Application of recommended fungicides.',
		sci_name: 'Helminthosporium maydis',
		fil_name: '',
		eng_name: 'Leaf Blight'
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
		eng_name: 'African armyworm, black armyworm, nutgrass armyworm, true armyworm, hail worm, mystery armyworm, rain worm'
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
		eng_name: 'common cutworm, grass cutworm, vegetable cutworm, tobacco cutworm, tobacco caterpillar, taro caterpillar'
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
		eng_name: 'Ear-cutting caterpillar, Oriental armyworm, Northern armyworm'
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
		eng_name: 'Greenhorned caterpillar (larva), common evening brown (adult)'
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
		eng_name: 'Rice Caseworm'
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
		eng_name: 'Green Semilooper'
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
		eng_name: 'Rice Leaffolder'
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
		eng_name: 'Rice skipper, Small branded swift, Black branded swift, Lesser millet skipper'
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
		eng_name: 'White stemborer'
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
		eng_name: 'Yellow Stemborer'
	});
}
