// DS Painting — Project data
// Used by project.html (via main.js) to render dedicated detail pages.
// Each entry's `id` matches the `data-project-id` on the corresponding
// portfolio.html tile.
window.PROJECTS = [
    {
        id: 'green-victorian',
        title: 'Green Victorian',
        city: 'Santa Cruz',
        state: 'CA',
        type: 'residential',
        year: '2023',
        description: 'A full exterior repaint of a classic three-story Victorian in central Santa Cruz. The original finish had been failing on the south- and west-facing elevations for several seasons, with significant chalking on the body coat and peeling on the trim. We stripped, primed, and re-coated the entire envelope to spec.',
        heroImage: 'house-green-classic.png',
        gallery: [],
        scope: [
            'Full exterior pressure wash and surface prep',
            'Lead-safe paint stripping on original Victorian trim (EPA RRP)',
            'Caulking, sanding, and spot-priming bare wood',
            'Two-coat application — body, trim, and decorative millwork',
            'Window sashes and front door hand-finished',
            'Final walkthrough and touch-ups'
        ],
        products: ['Sherwin-Williams Duration Exterior', 'SW Multi-Purpose Latex Primer', 'SW ProClassic Trim Enamel']
    },
    {
        id: 'commercial-quaker',
        title: 'Commercial Quaker',
        city: 'Aptos',
        state: 'CA',
        type: 'commercial',
        year: '2023',
        description: 'A two-elevation repaint of a multi-tenant commercial building in Aptos. The project was sequenced around the tenants\' business hours so storefronts stayed accessible throughout. Total turnaround was nine working days, on schedule.',
        heroImage: 'commercial-quaker.png',
        gallery: [],
        scope: [
            'Multi-phase scheduling around tenant operations',
            'Pressure wash and full prep on stucco and trim',
            'Patch and skim-coat repairs on damaged stucco sections',
            'Spray + back-roll application on body coat',
            'Hand-finished doors, fascia, and signage trim',
            'Daily site cleanup and parking-lot protection'
        ],
        products: ['Sherwin-Williams Loxon XP Masonry Coating', 'SW SuperPaint Exterior', 'SW Pro Industrial DTM']
    },
    {
        id: 'pink-victorian',
        title: 'Pink Victorian',
        city: 'Capitola',
        state: 'CA',
        type: 'residential',
        year: '2022',
        description: 'A historic Capitola Victorian with extensive ornamental trim. The homeowners wanted a soft heritage palette that would honor the period detail while standing up to the coastal weather. Color consultation included sample boards reviewed at three times of day.',
        heroImage: 'house-victorian-pink.png',
        gallery: [],
        scope: [
            'Color consultation and on-site sample review',
            'Full exterior wash and lead-safe scrape on original trim',
            'Wood repair on damaged corbels and trim returns',
            'Two-coat body and three-coat trim application',
            'Hand-finished decorative gable details',
            'HOA color approval coordination'
        ],
        products: ['Sherwin-Williams Emerald Exterior', 'SW Extreme Bond Primer', 'SW ProClassic Waterborne Acrylic']
    },
    {
        id: 'blue-balcony',
        title: 'Blue Balcony',
        city: 'Santa Cruz',
        state: 'CA',
        type: 'residential',
        year: '2024',
        description: 'A two-story modern home with a wraparound balcony deck and large architectural windows. Existing finish was weathered on the salt-air-facing side. Repaint included full-deck refinish and re-staining of the exposed beams.',
        heroImage: 'house-blue-balcony.png',
        gallery: [],
        scope: [
            'Salt-air-resistant coating spec',
            'Deck strip, sand, and stain refinish',
            'Window trim mask and hand-cut',
            'Beam staining and clear-coat',
            'Stucco patch and texture match',
            'Final pressure wash of patio and walkways'
        ],
        products: ['Sherwin-Williams Resilience Exterior', 'SW Deckscapes Solid Color Stain', 'SW ProClassic Trim']
    },
    {
        id: 'modern-victorian',
        title: 'Modern Victorian',
        city: 'Scotts Valley',
        state: 'CA',
        type: 'residential',
        year: '2024',
        description: 'A renovated Victorian where the owners wanted to honor the architecture but bring the palette into a more contemporary register. We worked with their designer on a three-color exterior scheme that played up the original siding profile.',
        heroImage: 'house-victorian-modern.png',
        gallery: [],
        scope: [
            'Three-color exterior consultation',
            'Full prep including window-frame caulking',
            'Body, trim, and accent coat application',
            'Garage door refinish',
            'Front porch and step refinish',
            'Final inspection walkthrough with owners'
        ],
        products: ['Sherwin-Williams Duration Exterior', 'SW Multi-Purpose Latex Primer', 'SW ProClassic Trim Enamel']
    },
    {
        id: 'kitchen-1',
        title: 'Kitchen Interior',
        city: 'Aptos',
        state: 'CA',
        type: 'residential',
        year: '2023',
        description: 'A full kitchen interior repaint for a couple updating their 1990s kitchen without a full remodel. Walls, ceiling, trim, and existing cabinetry — all refinished in place over four working days with minimal kitchen downtime.',
        heroImage: 'kitchen-1.png',
        gallery: [],
        scope: [
            'Full kitchen masking and floor protection',
            'Wall and ceiling repaint',
            'Cabinet door removal, sanding, and refinish',
            'Cabinet box hand-painted in place',
            'Trim, baseboard, and crown molding refinish',
            'Cabinet hardware reinstall'
        ],
        products: ['Sherwin-Williams Emerald Interior', 'SW ProClassic Cabinet Enamel', 'SW Premium Wall Primer']
    },
    {
        id: 'kitchen-2',
        title: 'Kitchen Cabinets',
        city: 'Santa Cruz',
        state: 'CA',
        type: 'residential',
        year: '2022',
        description: 'Cabinet-only refinish on a recently remodeled Santa Cruz kitchen. The homeowners had new cabinet boxes installed but wanted a custom factory-grade finish over big-box stock white. We sprayed the doors offsite and brushed the boxes in place.',
        heroImage: 'kitchen-2.png',
        gallery: [],
        scope: [
            'Full hardware and door removal',
            'Off-site spray finish on doors and drawer fronts',
            'In-place sand, prime, and brush finish on boxes',
            'Three-coat factory-grade enamel build',
            'Drying rack staging in dust-free shop',
            'Reinstall and final hardware adjustment'
        ],
        products: ['Sherwin-Williams Emerald Urethane Trim Enamel', 'SW Extreme Bond Primer']
    },
    {
        id: 'spanish-style',
        title: 'Spanish Style',
        city: 'Rio Del Mar',
        state: 'CA',
        type: 'residential',
        year: '2023',
        description: 'A Mediterranean-style home above Rio Del Mar with stucco walls, wrought-iron details, and clay-tile roofing. The repaint preserved the warm earth-tone palette while addressing significant cracking around the south elevation.',
        heroImage: 'house-spanish-style.png',
        gallery: [],
        scope: [
            'Stucco crack repair and patch',
            'Elastomeric coating spec on cracked sections',
            'Full body wash and prep',
            'Wrought-iron rust treatment and refinish',
            'Hand-finished entry door and window casings',
            'Touch-up walkthrough'
        ],
        products: ['Sherwin-Williams Loxon Acrylic Masonry', 'SW Pro Industrial Pro-Cryl Universal Primer', 'SW Resilience Exterior']
    },
    {
        id: 'beige-garage',
        title: 'Beige Garage Home',
        city: 'Watsonville',
        state: 'CA',
        type: 'residential',
        year: '2022',
        description: 'A single-story tract home in Watsonville. Standard exterior repaint with a full garage door refinish. Project completed in five working days with the homeowner remaining on-site throughout.',
        heroImage: 'house-beige-garage.png',
        gallery: [],
        scope: [
            'Full exterior wash',
            'Caulk and prep all trim joints',
            'Garage door strip, prime, and refinish',
            'Body and trim two-coat application',
            'Driveway and walkway protection',
            'Final cleanup'
        ],
        products: ['Sherwin-Williams SuperPaint Exterior', 'SW ProClassic Trim Enamel']
    },
    {
        id: 'commercial-green',
        title: 'Commercial Green',
        city: 'Santa Cruz',
        state: 'CA',
        type: 'commercial',
        year: '2024',
        description: 'A large-format multi-elevation commercial building near the Santa Cruz harbor. Coordination with the building manager kept all five tenant entrances accessible throughout the project. Painted in three sequenced phases over two weeks.',
        heroImage: 'commercial-green-building.png',
        gallery: [],
        scope: [
            'Three-phase staging plan',
            'Lift and scaffolding setup for upper elevations',
            'Pressure wash and full prep across all four sides',
            'Spray + back-roll body coat',
            'Tenant signage protection and re-trim',
            'Coordinated parking-lot closures'
        ],
        products: ['Sherwin-Williams Loxon XP Masonry', 'SW SuperPaint Exterior', 'SW Pro Industrial DTM']
    },
    {
        id: 'blue-street',
        title: 'Blue Street View',
        city: 'Capitola',
        state: 'CA',
        type: 'residential',
        year: '2023',
        description: 'A coastal home one block from the Capitola village. Constant salt-air exposure had taken a toll on the original finish — particularly around the front-facing trim. We spec\'d a corrosion-resistant primer and a marine-grade topcoat.',
        heroImage: 'house-blue-street.png',
        gallery: [],
        scope: [
            'Salt-air corrosion assessment',
            'Full prep with marine-grade primer',
            'Body, trim, and porch column refinish',
            'Wrought-iron railing strip and refinish',
            'Front door hand-finished',
            'Final inspection'
        ],
        products: ['Sherwin-Williams Resilience Exterior', 'SW Pro Industrial Pro-Cryl Primer', 'SW ProClassic Enamel']
    },
    {
        id: 'modern-wood',
        title: 'Modern Wood',
        city: 'Scotts Valley',
        state: 'CA',
        type: 'residential',
        year: '2024',
        description: 'A modern home with extensive cedar siding and exposed structural beams. The owners wanted to preserve the natural wood character with a clear-protective finish, paired with a fresh paint coat on the contrasting trim and stucco bays.',
        heroImage: 'house-modern-wood.png',
        gallery: [],
        scope: [
            'Cedar siding strip and clean',
            'Three-coat clear UV-protective stain',
            'Beam refinish in place',
            'Stucco bay repaint',
            'Trim and window casing refinish',
            'Deck stain and seal'
        ],
        products: ['Sherwin-Williams Woodscapes Translucent Stain', 'SW Resilience Exterior', 'SW Deckscapes']
    },
    {
        id: 'gray-palms',
        title: 'Gray Palms',
        city: 'Aptos',
        state: 'CA',
        type: 'residential',
        year: '2022',
        description: 'A modern Aptos home with mature landscaping that required careful protection of palms, rose beds, and irrigation. The repaint refreshed the body and trim and refinished the front entry sequence.',
        heroImage: 'house-gray-palms.png',
        gallery: [],
        scope: [
            'Comprehensive landscape protection',
            'Drip-irrigation flagging and shut-off',
            'Body and trim two-coat application',
            'Front door and entryway refinish',
            'Garage door refinish',
            'Final landscape sweep and irrigation restart'
        ],
        products: ['Sherwin-Williams Duration Exterior', 'SW Multi-Purpose Latex Primer']
    },
    {
        id: 'solar-home',
        title: 'Solar Home',
        city: 'Santa Cruz',
        state: 'CA',
        type: 'residential',
        year: '2023',
        description: 'A repaint coordinated around an active rooftop solar array. We worked with the homeowner\'s solar contractor to mask and protect the panels and conduit runs without disconnecting the system. Roof mounting brackets were touched up in matching color.',
        heroImage: 'house-solar.png',
        gallery: [],
        scope: [
            'Solar-array protection and conduit masking',
            'Coordination with homeowner\'s solar contractor',
            'Full body and trim repaint',
            'Roof flashing and bracket touch-ups',
            'Soffit and fascia refinish',
            'Walkway and driveway protection'
        ],
        products: ['Sherwin-Williams SuperPaint Exterior', 'SW Pro Industrial DTM', 'SW ProClassic Trim']
    },
    {
        id: 'victorian-blue',
        title: 'Blue Victorian',
        city: 'Santa Cruz',
        state: 'CA',
        type: 'residential',
        year: '2021',
        description: 'A two-story Victorian on a corner lot in Santa Cruz with wraparound porch and original turn-of-the-century millwork. The repaint preserved the heritage palette and addressed water-damaged trim sections under the eaves.',
        heroImage: 'house-victorian-blue.png',
        gallery: [],
        scope: [
            'Lead-safe scrape on original trim (EPA RRP)',
            'Wood repair on water-damaged sections',
            'Three-coat trim build on decorative millwork',
            'Body and porch refinish',
            'Hand-finished window sashes',
            'Touch-up walkthrough'
        ],
        products: ['Sherwin-Williams Emerald Exterior', 'SW Extreme Bond Primer', 'SW ProClassic Trim Enamel']
    },
    {
        id: 'wood-cabin',
        title: 'Wood Cabin',
        city: 'Boulder Creek',
        state: 'CA',
        type: 'residential',
        year: '2023',
        description: 'A redwood cabin in the Boulder Creek hills. The owners wanted to preserve the natural wood appearance while protecting the structure from another decade of redwood-canopy moisture. Stain refresh paired with refinished trim.',
        heroImage: 'house-wood-cabin.png',
        gallery: [],
        scope: [
            'Full exterior wash',
            'Translucent stain refresh on redwood siding',
            'Trim and window casing repaint',
            'Deck and railing refinish',
            'Roof flashing touch-ups',
            'Final clear-coat on high-exposure surfaces'
        ],
        products: ['Sherwin-Williams Woodscapes Translucent Stain', 'SW SuperPaint Exterior', 'SW Deckscapes']
    }
];
