/* ============================================
   MARROW ED8 - CHAPTER DATA & ACCORDION LOGIC
   ============================================ */

const data = {
    "Anatomy": {
        "folder": "Anat_tests",
        "chapters": [
            "01_Gametogenesis","02_Pre-Embryonic Phase of Development","03_Embryonic Phase of Development",
            "04_Placenta, Fetal Membranes and Twinning","05_Pharyngeal arches, Skeletal & Muscular Systems",
            "06_Cardiovascular and Respiratory Systems","07_Alimentary, Hepatobiliary systems, Pancreas and...",
            "08_Face, Nose & Palate, Eye, Ear","09_Nervous System and Endocrine Glands","10_Urogenital System",
            "11_Cell Structure, Epithelia, Glands & Connective ...","12_Bone, Cartilage & Muscular Tissue",
            "13_Nervous and Endocrine Systems","14_Cardiovascular, Lymphatic and Respiratory Systems",
            "15_Digestive, Hepatobiliary & Genitourinary Systems","16_Skin & Special Senses, Eye and Ear",
            "17_Cranial Nerves","18_Meninges and dural venous sinuses",
            "19_Ventricular System and Subarachnoid Space","20_Cerebrum","21_White Matter of the Brain",
            "22_Basal Ganglia and Limbic System","23_Diencephalon","24_Brainstem","25_Cerebellum",
            "26_Vascular supply of Brain","27_Spinal Cord","28_Osteology, Scalp and Face",
            "29_Deep fascia and Triangles of the neck","30_Muscles, Neurovascular Anatomy of Head & Neck",
            "31_Glands of the Head and Neck","32_Tongue and Palate","33_Pharynx","34_Larynx",
            "35_Upper Limb Bones and Joints","36_Fossae and Spaces of the Upper Limb","37_Breast",
            "38_Brachial Plexus and Nerves","39_Muscles - Upper Limb","40_Vessels-Upper limb",
            "41_General Anatomy of Thorax","42_Thoracic Wall","43_Mediastinum","44_Diaphragm","45_Heart",
            "46_Lungs and Pleura","47_Anterior Abdominal Wall","48_Abdominal cavity and Peritoneum",
            "49_GI Tract","50_Hepatobiliary system, Spleen & Pancreas","51_KUB & Adrenal Gland",
            "52_Internal and external genitalia","53_Pelvis & Perineum","54_Bones of the Lower Limb",
            "55_Joints of the Lower Limb","56_Muscles of the Lower Limb","57_Nerves & Vessels of Lower Limb",
            "58_Important Structures of Lower Limb","59_Vertebral Column","60_Bones, Joints and Cartilage",
            "61_Muscles and Tendons","62_Cardiovascular, Lymphatic and Nervous Systems",
            "63_Skin, Connective Tissue and Ligaments"
        ]
    },
    "Physiology": {
        "folder": "Physio_tests",
        "chapters": [
            "01_Homeostasis and cellular physiology","02_Cellular messengers & Receptors",
            "03_Transport Across Cell Membrane","04_Membrane Potentials","05_Body Fluids",
            "06_Physiology of Nerve","07_Muscle Physiology I","08_Muscle Physiology II",
            "09_Synapse and Junctional Transmission","10_Neurotransmitters","11_Sensory Receptors",
            "12_Somatosensory Pathways","13_Special Senses","14_Motor Physiology - 1",
            "15_Motor Physiology - 2","16_Basal Ganglia and Cerebellum","17_Hypothalamus and Limbic System",
            "18_Higher Mental Functions","19_Functional Anatomy","20_Lung Mechanics",
            "21_Alveolar Gas Exchange","22_Gas Transport in Blood","23_Lung Volumes and Lung Function Tests",
            "24_Respiratory Adaptations in Hypoxia, Anemia and ...","25_Regulation of Respiration",
            "26_Vascular System and Regional Circulation I","27_Vascular System and Regional Circulation II",
            "28_Cardiac Cycle and Cardiac Output","29_Electrophysiology of the Heart",
            "30_Blood Pressure and Regulation","31_Gastrointestinal Secretion and Gastrointestinal...",
            "32_Digestion & Absorption","33_GI Peristalsis and Motility",
            "34_Glomerular Filtration Rate, Renal Blood Flow, a...",
            "35_Renal Tubular Functions, Urine Concentration an...",
            "36_Acid-Base Balance, Renal Hormones and Micturiti...","37_Pituitary and Thyroid",
            "38_The Pancreas","39_The Adrenals","40_Calcium Homeostasis",
            "41_Male Reproductive Physiology","42_Female Reproductive Physiology","43_Exercise Physiology"
        ]
    },
    "Biochemistry": {
        "folder": "Biochem_tests",
        "chapters": [
            "01_Chemistry of Carbohydrates, Amino sugars and Mu...","02_Glycolysis and gluconeogenesis",
            "03_Glycogen metabolism and glycogen storage disorders",
            "04_HMP shunt pathway, Fructose , Galactose metabolism","05_ETC and bioenergetics",
            "06_Krebs Cycle","07_Amino acids Basics","08_Amino acid Metabolism",
            "09_Amino acid Metabolic disorder","10_Protein structure and function",
            "11_Urea cycle and its disorders","12_Lipids Basics","13_Fatty acid oxidation and ketogenesis",
            "14_Biosynthesis of fatty acids and Eicosanoids","15_Metabolism of Acylglycerols and Sphingolipids",
            "16_Cholesterol Synthesis, Transport and Excretion","17_Porphyrins and bile pigments",
            "18_Enzymes - Mechanism of Action & Clinical Import...",
            "19_Enzyme Kinetics and Regulation of Activity","20_Fat soluble vitamins",
            "21_Energy releasing vitamins","22_Hematopoietic and other vitamins",
            "23_Antioxidants & Minerals","24_Basics of genetics - Nucleotide metabolism and ...",
            "25_DNA organization, replication and repair","26_RNA synthesis, processing and modification",
            "27_Regulation of gene expression","28_Molecular genetics, recombinant DNA & genomic t..."
        ]
    },
    "Pathology": {
        "folder": "Patho_tests",
        "chapters": [
            "01_Cellular Genetics, Adaptations and Injury","02_Cell Death",
            "03_Intracellular Accumulations, Pathological Calci...","04_Acute Inflammation",
            "05_Inflammatory Mediators and Granulomatous Inflam...","06_Tissue Repair",
            "07_Disorders of Hemodynamics and Hemostasis","08_Modes of Inheritance",
            "09_Lysosomal and Glycogen Storage Diseases","10_Chromosomal Disorders and Other Genetic Disorders",
            "11_Characteristics of Neoplasms and Epidemiology","12_Molecular Basis of Cancer and Tumor Immunity",
            "13_Carcinogenesis, Paraneoplastic Syndromes and Tu...","14_Components of Immune System",
            "15_Hypersensitivity and Autoimmunity","16_Immunodeficiency Syndromes",
            "17_Amyloidosis and Graft Rejection","18_Microcytic Anemia",
            "19_Normocytic And Macrocytic Anemia","20_Basics of Hemolysis and Intravascular Hemolysis",
            "21_Extravascular Hemolysis","22_G6PD deficiency and Autoimmune Hemolytic Anemias",
            "23_Platelet Disorders","24_Coagulation Pathway Disorders",
            "25_Blood Products and Transfusion Reactions","26_Acute Lymphocytic Leukemia (ALL)",
            "27_Acute Myeloid Leukemia (AML)","28_Hodgkin's Lymphoma",
            "29_Non Hodgkin Lymphomas General Considerations","30_Non Hodgkin Lymphomas Low Grade",
            "31_Non Hodgkin Lymphomas High Grade","32_Multiple Myeloma and Plasma Cell Disorders",
            "33_Myelodysplastic Syndrome, Myeloproliferative Sy...",
            "34_Leukopenia, Leukocytosis and Lymphadenitis",
            "35_Hypertensive Vascular Disease and Atherosclerosis","36_Aneurysm and Dissection",
            "37_Vasculitis","38_Vascular Tumors","39_Heart Failure and Ischemic Disease",
            "40_Myocardial and Pericardial Diseases and Cardiac...",
            "41_Congenital and Valvular Heart Disease","42_Rheumatic Fever and Endocarditis",
            "43_Glomerular Diseases","44_Tubulointerstitial, Vascular and Cystic Diseases",
            "45_Renal Tumors","46_Lower Urinary Tract","47_Female Genital Tract","48_Male Genital Tract",
            "49_Alcoholic and Infectious Liver Disease","50_Autoimmune and Metabolic Liver Disease",
            "51_Neoplasms of Liver and Biliary tract","52_Gall Bladder and Pancreas","53_Esophagus",
            "54_Stomach","55_Small Intestine","56_Large Intestine - Non-Neoplastic Conditions",
            "57_Large Intestine - Neoplastic Conditions","58_Congenital anomalies, ARDS, Infections",
            "59_Obstructive and Restrictive lung diseases","60_Lung tumors",
            "61_Pituitary ,Parathyroids and Pancreas","62_Thyroid Glands","63_The Adrenals","64_The Breast",
            "65_Developmental disorders,infections and tumors o...","66_Joints and soft tissue pathology",
            "67_Skin pathology","68_Infective & Vascular CNS pathology",
            "69_Degenerative, Toxic & Metabolic CNS disorders","70_CNS Tumours",
            "71_Peripheral nerves & Neuromuscular pathology"
        ]
    },
    "Microbiology": {
        "folder": "Micro_tests",
        "chapters": [
            "01_General Microbiology","02_Components of Immune system",
            "03_Structure and Functions of the Immune System & ...","04_Hypersensitivity",
            "05_Immune Disorders","06_Streptococci and Enterococci","07_Staphylococci",
            "08_Corynebacterium, Listeria and Actinomyces","09_Clostridium and Bacillus",
            "10_Mycobacteria Tuberculosis","11_Other Mycobacteria","12_Escherichia, Proteus and Klebsiella",
            "13_Shigella and Salmonella","14_Vibrio and Campylobacterales",
            "15_Pseudomonas and Burkholderiales","16_Haemophilus",
            "17_Miscellaneous Bacteria - Yersinia, Brucella, Ba...","18_Gram Negative Cocci",
            "19_Rickettsia, Chlamydia and Mycoplasma","20_Spirochetes",
            "21_General Properties of Viruses","22_DNA Viruses","23_Hepatitis","24_HIV",
            "25_Myxoviruses and Rhabdoviruses","26_Arboviruses and Picorna Viruses",
            "27_Miscellaneous Viruses - Rubella, Coronaviruses,...","28_Superficial and Systemic Mycoses",
            "29_Opportunistic Mycoses","30_General Parasitology",
            "31_Protozoology - Amoebae, Ciliates & Flagellates","32_Protozoology - Sporozoa",
            "33_Helminthology - Cestodes & Trematodes","34_Helminthology - Nematodes",
            "35_Applied Microbiology"
        ]
    },
    "Pharmacology": {
        "folder": "Pharma_Tests",
        "chapters": [
            "01_Pharmacokinetics","02_Pharmacodynamics","03_Clinical Trials and Miscellaneous",
            "04_Pharmacokinetics - Calculations","05_ANS Introduction & Parasympathomimetics",
            "06_Sympathomimetics","07_Parasympatholytics","08_Sympatholytics",
            "09_Drugs for Glaucoma","10_Anti-Anginal Drugs","11_Heart Failure Drugs",
            "12_Antihypertensive Drugs","13_Diuretics","14_Anti-Arrythmic Drugs",
            "15_Hypolipidemic Drugs","16_Renin-Angiotensin-Aldosterone System","17_Anti-diuretics",
            "18_Sedatives and Hypnotics","19_Anti-epileptics I","20_Anti-epileptics II",
            "21_Anti-psychotics","22_Anti-manic Drugs","23_Drugs for Parkinson\u2019s Disease",
            "24_Antidepressant and Antianxiety Drugs","25_Opioids - Functions and Classification",
            "26_Synthetic Opioids","27_Opioid Antagonists","28_Alcohols",
            "29_Drugs for Alzheimer's Disease and Other Neurode...",
            "30_General Principles of Antimicrobial Therapy","31_Antimalarial Drugs",
            "32_Sulfonamides , Quinolones and Urinary antiseptics",
            "33_Antimicrobials Acting on 30s Subunit","34_Antimicrobials Acting on 50s Subunit",
            "35_Antiretroviral Drugs","36_Penicillins","37_Cephalosporins, Vancomycin and Carbapenems",
            "38_Miscellaneous Antimicrobials","39_Anti-Protozoal agents and Anthelmintic drugs",
            "40_Antifungal Agents","41_First Line Drugs for Tuberculosis",
            "42_Second Line Drugs for Tuberculosis","43_Anti-leprosy drugs",
            "44_Anti-virals (Non-retroviral)","45_Hypothalamus and Pituitary",
            "46_Thyroid and Antithyroid Agents","47_Corticosteroids",
            "48_Osteoporosis and Calcium Metabolism","49_Anti-Diabetic Drugs - Oral",
            "50_Anti-Diabetic Drugs - Injectable","51_OCPs, Estrogens and Progestins",
            "52_Androgens and Drugs for Erectile Dysfunction","53_Drugs Acting on Uterus","54_NSAIDs",
            "55_Antimigraine and Antigout drugs","56_Anti-rheumatoid drugs","57_Anti-histamines",
            "58_Antiplatelets, Fibrinolytics and Antifibrinolytics","59_Hematinics","60_Anticoagulants",
            "61_Respiratory System","62_Acid Peptic Disorders and Inflammatory Bowel Di...",
            "63_Anti-emetics and Drugs Affecting Gastrointestin...","64_Cell Cycle Specific Cytotoxic Drugs",
            "65_Non Cell Cycle Specific Cytotoxic Drugs","66_Monoclonal Antibodies",
            "67_Interleukins, Growth Factors and Targeted Thera..."
        ]
    },
    "ENT": { "folder": "ENT_tests", "chapters": ["01_Embryology of Ear and Malformations","02_Anatomy of External Ear","03_Anatomy of Middle Ear","04_Anatomy of Mastoid","05_Anatomy of Inner Ear","06_Disorders of External Ear","07_Disorders of Middle Ear","08_Cholesteatoma and Types of CSOM","09_CSOM - Treatment and Complications","10_Otosclerosis","11_Meniere\u2019s Disease","12_Tumors of Ear","13_Anatomy of Facial Nerve","14_Facial Nerve Disorders","15_Eustachian Tube","16_Physiology of hearing and Tuning fork tests","17_Audiometric tests and Special tests of hearing","18_Anatomy of Nose","19_Anatomy of Paranasal Sinuses","20_Physiology of Nose and Paranasal Sinuses","21_Epistaxis","22_Congenital Anomalies of Nose and Disease of Nose","23_Rhinitis","24_Disorder of Nasal Septum and Nasal Polyposis","25_Trauma of Nose and Face","26_Tumors of Nose and PNS","27_Sinusitis and its Complication","28_Anatomy and Physiology of Pharynx","29_Adenoids","30_Tonsils","31_Abscesses of Pharynx","32_Nasopharyngeal Angiofibroma","33_Nasopharyngeal Carcinoma","34_Anatomy and Physiology of Larynx","35_Stridor and Congenital Conditions of Larynx","36_Voice and Speech Disorders","37_Laryngeal Carcinoma","38_Instruments"] },
    "Ophthalmology": { "folder": "Ophtha_tests", "chapters": ["01_Anatomy and Development of Eye","02_Elementary Optics and Physiology of Vision","03_Myopia and Hypermetropia","04_Astigmatism and Errors of Accomodation","05_Conjunctiva","06_Sclera","07_Basics of Cornea and Infectious Keratitis","08_Non-infectious Disorders of Cornea","09_Retinal vascular disorders and Retinal detachment","10_Macular disorders, Retinal dystrophies, and Vit...","11_Lens - Introduction, Types of Cataract and Clin...","12_Lens - Cataract Surgery, Complications and IOLs","13_Glaucoma","14_Uveitis - Anterior and Intermediate","15_Uveitis - Posterior and Panuveitis","16_Disorders of the Eyelid","17_Disorders of Lacrimal Apparatus and Glands of t...","18_Orbit Anatomy and Ocular Injuries","19_Diseases of the Orbit","20_Strabismus - Introduction, Symptomatology, and ...","21_Strabismus - Types and Treatment","22_Disorders of Visual Pathway and Pupillary Reflexes","23_Disorders of Optic Nerve and Gaze Palsies","24_Tumors of Eye","25_Practical Ophthalmology","26_Eye Signs in Systemic Disease","27_Community Ophthalmology","28_Instruments in Ophthalmology"] },
    "PSM": { "folder": "PSM_tests", "chapters": ["01_History of Medicine","02_Health Determinants and Indicators","03_Concepts of Disease and Prevention","04_Principles of Epidemiology","05_Descriptive Epidemiology","06_Analytical Epidemiology","07_Experimental Epidemiology","08_Basic Definitions in Infectious Disease Epidemi...","09_Dynamics of Disease Transmission","10_Principles of Immunization and Vaccination","11_Vaccine Production and Storage","12_Sterilization and Disinfection","13_Screening","14_Viral Respiratory Infections","15_Bacterial Respiratory Infections","16_Intestinal Infections","17_Arthropod-Borne Infections","18_Zoonotic Infections - Viral","19_Zoonotic Infections - Bacterial & Parasitic","20_STDs and Surface Infections","21_Non-Communicable Diseases - Cardiovascular Dise...","22_Non-Communicable Diseases - Cancer, Obesity and...","23_National Health Programmes I - NVBDCP","24_National Health Programmes II - NLEP, NTEP & NACO","25_National Health Programmes III - NIS, JSY, RBSK...","26_Demography I Demographic Cycle, Annual Growth ...","27_Demography II Demographic indicators","28_Family Planning","29_Preventive Obstetrics, Pediatrics and Geriatrics","30_Energy Metabolism and Macronutrients","31_Micronutrients and Water","32_Food Quality and Processing","33_Concepts of Sociology and Psychology","34_Social Organization and Economics","35_Water - I Sources and purification of water","36_Water- II Disinfection of water","37_Water - III Water Quality and Standards","38_Environmental Meteorology","39_Housing and Ventilation","40_Light, Sound and Radiation","41_Waste and Sewage Disposal","42_Medical Entomology - Mosquitoes and Flies","43_Medical Entomology - Ticks, Fleas and Mites","44_Methods of Pest Control","45_Biomedical Waste Management","46_Disaster Management","47_Occupational Health Diseases","48_ESI and Factories Act","49_Communication for Health Education","50_Health Planning and Management","51_Healthcare In India","52_Healthcare in India- IPHS 2022 Update","53_International Health","54_Descriptive Statistics I - Probability and Data","55_Descriptive Statistics II - Measures of Location","56_Descriptive Statistics III - Measures of Disper...","57_Descriptive Statistics IV - Measures of Position","58_Inferential Statistics","59_Concepts in Hypothesis Testing","60_Tests of Significance","61_Correlational and Predictive Techniques","62_Facets of Clinical Research and Biostatistics","63_Mental Health","64_Genetics and Health"] },
    "FMT": { "folder": "FMT_tests", "chapters": ["01_Skeletal and Dental Age Determination","02_Race, Sex and Stature Determination","03_Fingerprint and Tattoos","04_BNS, BNSS, and BSA","05_Death and Post-Mortem Changes","06_Medico Legal Autopsy","07_Mechanical Injuries","08_Regional injuries","09_Thermal Injuries","10_Firearm Injuries and Blast Injuries","11_Mechanical Asphyxia","12_Drowning","13_Sexual Offences and Abortion","14_Childhood Violence, Infanticide and Starvation","15_Poisoning General Considerations","16_Organophosphorus Poisoning","17_Corrosives and Asphyxiants","18_Alcohol Poisoning","19_Inorganic Irritants - Metallic and Non-metallic","20_Organic Irritants - Plant and Animal Poisons","21_CNS - Narcotics and Deliriants"] },
    "Medicine": { "folder": "Medicine_tests", "chapters": ["01_Clinical examination","02_Acid-Base Disorders","03_General Principles of Endocrinology","04_Disorders of Anterior Pituitary","05_Pituitary Tumours and Sheehan's Syndrome","06_Posterior Pituitary - ADH, Oxytocin & Diabetes ...","07_Syndrome of Inappropriate Anti-Diuretic Hormone...","08_Thyroid Disorders - Clinical Features","09_Thyroid Disorders - Management","100_HIV  AIDS - Management and Prophylaxis","101_COVID 19 - Epidemiology and Clinical Features","102_COVID 19 - Investigations","103_COVID 19 - Treatment","104_COVID 19 - Prophylaxis and Complications","10_Multiple Endocrine Neoplasia","11_Pheochromocytoma","12_Cushing's Syndrome","13_Adrenal Insufficiency and Hyperaldosteronism","14_Diabetes Mellitus Types, Clinical Features and...","15_Diabetes Mellitus Complications and their Mana...","16_Reproductive Endocrinology","17_Disorders of Parathyroid and Calcium Homeostasis","18_Obesity","19_Hyperbilirubinemias and Tests of Liver Function","20_Alcoholic Liver Diseases and Non-Alcoholic Fatt...","21_Viral Hepatitis","22_Autoimmune Disorders of Hepatobiliary System","23_Acute Liver Failure and Liver Transplantation","24_Hemochromatosis and Wilson's disease","25_Cirrhosis and Complications","26_Peptic Ulcer Disease and Related Disorders","27_Evaluation of Diarrhea","28_Irritable Bowel Syndrome","29_Inflammatory Bowel Disease - Clinical Features ...","30_Inflammatory Bowel Disease - Complications and ...","31_Malabsorption Syndromes","32_Other Gastrointestinal Conditions","33_Large and medium vessel vasculitis","34_Small vessel vasculitis","35_Crystal Arthropathies","36_Sjogren's Syndrome and Scleroderma","37_Sarcoidosis","38_Dermatomyositis and Related Disorders","39_Seronegative Spondyloarthritides","40_SLE and APS","41_Rheumatoid Arthritis","42_Asthma & COPD","43_Pneumonia","44_Interstitial Lung Diseases and pneumoconiosis","45_Bronchiectasis and Lung Abscess","46_Pulmonary Function Tests","47_Respiratory Failure and ARDS","48_Neoplasms of the Lung","49_Sleep apnea","50_Urine Analysis","51_Chronic Kidney Disease","52_Acute Kidney Injury","53_Renal Replacement Therapy","54_Cystic and Inherited Disorders of the Kidney","55_Renal Tubular Disorders","56_Vascular Diseases of Kidney","57_Diagnosis of cardiovascular disorders","58_ECG Basics","59_Supraventricular Arrhythmias","60_Ventricular Arrhythmias and Heart Blocks","61_Valvular Heart Diseases","62_Infective Endocarditis and Acute rheumatic fever","63_Hypertensive Vascular Disease","64_Ischemic Heart Disease - Presentation and Diagn...","65_Ischemic Heart Disease - Complications and Mana...","66_Cardiomyopathy and Myocarditis","67_Heart Failure","68_Pericardial Diseases","69_Pulmonary Hypertension","70_Diseases of Aorta and Peripheral Arteries","71_DVT and Pulmonary Embolism","72_General Neurology, Brain Death, and GCS","73_Seizures and Epilepsy","74_Ischemic Stroke","75_Brainstem Syndromes and Hemorrhagic Stroke","76_Peripheral Neuropathy","77_Guillain-Barre Syndrome and Other Immune-mediat...","78_Diseases of the Spinal Cord","79_Myasthenia gravis and Other Neuromuscular Junct...","80_Multiple Sclerosis & Other Demyelinating Disorders","81_Headache Disorders","82_Movement Disorders","83_ALS and Other Motor Neuron Diseases","84_Ataxic Disorders","85_Cranial Nerve Disorders","86_Infections of the Nervous System","87_Hypoproliferative Anemia","88_Macrocytic Anemia","89_Hemolytic Anemia","90_Myeloproliferative Disorders and Aplastic Anemia","91_Platelet Disorders","92_Acute Leukemia","93_Plasma Cell Disorders","94_Chronic Myeloid Leukemia and Chronic Lymphoid L...","95_Lymphomas","96_Coagulation Disorders","97_Haemoglobinopathies","98_Blood Bank & Transfusion Medicine","99_HIV  AIDS - Epidemiology and Clinical Features"] },
    "Surgery": { "folder": "Surgery_tests", "chapters": ["01_Fluids, Electrolytes & Nutrition","02_Shock and Blood Transfusion","03_Instruments & Sutures","04_Paediatric Surgery","05_Trauma - Scores, Investigations and Assessment","06_Trauma - Spinal, Thoracic and Abdominal Injuries","07_Breast - Anatomy, Congenital and Benign Diseases","08_Carcinoma Breast - Risk Factors and Types","09_Investigations in Breast diseases","10_Carcinoma Breast - Staging, Prognosis & Molecul...","11_Carcinoma Breast - Treatment","12_Benign Lesions of Thyroid","13_Thyroid Malignancies","14_The Parathyroids","15_The Adrenals","16_Esophagus - Congenital, Motility & Inflammatory...","17_Esophagus - GERD & Carcinoma","18_Stomach and Duodenum","19_Carcinoma Stomach","20_Metabolic & Bariatric Surgery","21_Small Intestine","22_Large Intestine","23_Appendix","24_Polyps and Colorectal Carcinoma","25_Rectum","26_Anus and Anal Canal","27_Hernia","28_Benign Conditions of Liver","29_Benign Tumors of Liver","30_Malignant Tumors of Liver","31_Gall Bladder","32_Bile Duct","33_Spleen","34_Endocrine Pancreas","35_Congenital Anomalies and Acute Pancreatitis","36_Chronic Pancreatitis","37_Carcinoma Pancreas","38_Congenital Diseases of Kidney and Urinary Calculi","39_Infections and Tumors of Kidney","40_Urinary Bladder and Ureters","41_Prostate","42_Urethra and Penis","43_Testes and Scrotum","44_Head Injury","45_Oral Cavity & Salivary glands","46_Burns","47_Wound Healing, Tissue Repair & Scar","48_Reconstructive Surgery","49_Thorax & Lungs","50_Ischemic Arterial Diseases","51_Arterial Aneurysms, Dissections and Malformations","52_Venous Diseases","53_Lymphatic Diseases","54_Skin Malignancies"] },
    "OBGYN": { "folder": "OBGYN_tests", "chapters": ["01_Anatomy of Female Pelvic Organs","02_The Physiology of Conception","03_Maternal Pelvis and Fetal Skull","04_Placenta and Fetal Membranes","05_Sexual Development, Puberty and Adolescence","06_Physiological Changes During Pregnancy","07_Diagnosis of Pregnancy and Antenatal Care","08_Antenatal Investigations","09_Obstetrical Imaging","10_Normal Labour","11_Abnormal Labour","12_Induction and Augmentation of Labour","13_Malpresentations","14_Operative Vaginal Delivery","15_Caesarean Section and Vaginal Birth After Caesa...","16_Puerperium","17_Multifetal Pregnancy","18_Ectopic Pregnancy","19_Abortion and Medical Termination of Pregnancy","20_Antepartum Hemorrhage","21_Postpartum Haemorrhage","22_Preterm Labor and Postterm Pregnancy","23_Gestational Trophoblastic Diseases","24_Anemia in Pregnancy","25_Hypertensive Disorders in Pregnancy","26_Diabetes in Pregnancy","27_Cardiovascular Conditions in Pregnancy","28_Rhesus Isoimmunization","29_Hepatic Disorders and Infections in Pregnancy","30_Disorders of Menstruation","31_Uro-gynecology","32_Prolapse","33_Fibroid","34_Endometriosis and Adenomyosis","35_Disorders of Ovary","36_Contraception and Sterilization","37_Vaginal Infections","38_Vulval Infections","39_Pelvic Inflammatory Disease","40_Genital Tuberculosis","41_Infertility","42_Perimenopause, Menopause and Post-Menopausal Bl...","43_Ovarian Tumors","44_Vulval & Vaginal Malignancy","45_Carcinoma Cervix","46_Carcinoma Endometrium","47_Instruments"] },
    "Pediatrics": { "folder": "Pedia_tests", "chapters": ["01_Basics of Neonatology and Routine Newborn Care","02_Disorders of Newborn","03_Diseases in Neonates requiring Special Care","04_Apgar score and Neonatal Resuscitation","05_Developmental Milestones","06_Facets of Growth and Development","07_Nutrition and Breastfeeding","08_Protein Energy Malnutrition","09_Deficiency of Fat Soluble Vitamins","10_Deficiency of Water-soluble Vitamins & Trace El...","11_Fluid and Electrolyte Disorders","12_Mendelian and Non-Mendelian Disorders","13_Chromosomal Disorders","14_Metabolic Disorders of Amino Acids","15_Metabolic Disorders of Urea Cycle, Complex Mole...","16_Polio and AIDS","17_Pediatric Bacterial and Parasitic Infections","18_Measles, Mumps, Rubella and Other Viral Infections","19_Surgical GI Disorders","20_Medical GI disorders","21_Disorders of the Liver","22_Neonatal Respiratory Disorders","23_Childhood Respiratory Disorders","24_Fetal Circulation","25_Acyanotic Congenital Heart Diseases","26_Cyanotic Congenital Heart Diseases","27_Pediatric Nephrology","28_Pediatric Urology","29_Disorders of the Nervous System","30_Disorders of Thyroid","31_Congenital Adrenal Hyperplasia and Related Diso...","32_Disorders of the Pituitary Gland","33_Disorders of Puberty","34_Paediatric Hemato-oncology","35_Solid Neoplasms of Childhood","36_Musculoskeletal Disorders","37_Paediatric Rheumatology","38_Pediatric Hematology - Introduction, Bleeding, ...","39_Pediatric Anemias"] },
    "Orthopedics": { "folder": "Ortho_tests", "chapters": ["01_Basics of fracture and its management","02_Complications of fracture","03_Regional conditions of neck","04_Injuries of clavicle, shoulder and arm","05_Injuries of elbow and forearm","06_Injuries of hand","07_Regional conditions of the upper limb","08_Dislocations of the Hip joint","09_Fractures of femur","10_Injuries of knee, leg and foot","11_AVN and Regional conditions of lower limb","12_Injuries of spine","13_Regional Conditions of Spine","14_Spondylolisthesis & IVDP","15_Injuries of Pelvis","16_Infections of the bone","17_Skeletal Tuberculosis","18_Fractures in children","19_CTEV, Genu varum and valgum","20_Congenital malformations, Perthes disease and SCFE","21_Metabolic Bone Diseases in Children","22_Osteoporosis and Osteomalacia","23_Paget's Disease and Hyperparathyroidism","24_Rheumatoid Arthritis and Osteoarthritis","25_Spondyloarthropathies and Crystal arthropathies","26_Nerve Injuries","27_Benign Tumors Of Bone","28_Malignant Tumors of Bone","29_Implants, splints and traction","30_Trauma amputations, prosthetics and joint repla...","31_Sports Injury"] },
    "Dermatology": { "folder": "Derma_tests", "chapters": ["01_Anatomy & Physiology of Skin","02_Dermatopathology of Skin Lesions","03_Morphology and Investigations of Skin Lesions","04_Acne, Rosacea and Others","05_Disorders of Hair and Nails","06_Disorders of Skin Pigmentation","07_Dermatitis","08_Urticaria & Angioedema","09_Reactive Skin Diseases and Drug Eruptions","10_Papulosquamous Disorders","11_Psoriasis","12_Vesiculobullous Diseases","13_Mycobacterial Infections","14_Bacterial Infections","15_Viral Infections","16_Fungal and Protozoal Infections","17_Arthropod and Parasitic Infections","18_Syphilis","19_Non Syphilitic Sexually Transmitted Diseases","20_Genodermatoses & Nutritional Disorders","21_Connective Tissue Disorders","22_Skin Malignancies","23_Systemic Diseases and Skin"] },
    "Psychiatry": { "folder": "Psychiatry_tests", "chapters": ["01_Theories of Personality & Defense Mechanisms","02_Symptoms and Clinical Manifestations in Psychiatry","03_Assessment in Psychiatry","04_Specific Treatment Modalities","05_Neuropsychiatric Aspects of Systemic Disorders","06_Schizophrenia","07_Other Psychotic Disorders","08_Delirium","09_Dementia","10_Amnestic Disorders and Other Neurocognitive Dis...","11_Depressive Disorders","12_Bipolar and Related Disorders","13_Alcohol-Related Disorders","14_Other Substance Use Disorders","15_Anxiety Disorders","16_Obsessive-Compulsive and Related Disorders","17_Trauma and Stress-Related Disorders","18_Personality Disorders","19_Somatoform Disorders","20_Factitious Disorders, Malingering and Criminality","21_Dissociative Disorders","22_Sleep Disorders","23_Eating Disorders","24_Impulse-Control Disorders","25_Psychiatric Emergencies","26_Normal Sexuality and Sexual Dysfunction","27_Sexual Disorders and Sexual Abuse","28_Intellectual Disability & Specific Learning Dis...","29_Autism Spectrum Disorder","30_Attention-Deficit Disorders and Disruptive Beha...","31_Neurodevelopmental Motor Disorders","32_Special Areas of Childhood Mental Health","33_Forensic Psychiatry"] },
    "Radiology": { "folder": "Radio_tests", "chapters": ["01_Fundamentals of X-Ray and CT","02_Fundamentals of USG and MRI","03_Musculosketal System","04_Pleural Effusion, Pneumothorax, Pulmonary Edema...","05_Lung Infections, Sarcoidosis and Lung Cancer","06_Cardiovascular System","07_Congenital Neural Anomalies, Neurocutaneous Dis...","08_Brain Tumors, Neurodegenerative & Demyelinating...","09_Upper GI Radiology and Pneumoperitoneum","10_Lower GI Radiology","11_Hepatobiliary and Pancreatic Radiology","12_Nephroradiology","13_OBG radiology","14_Radiotherapy","15_Nuclear Medicine"] },
    "Anaesthesia": { "folder": "Anaesthesia_tests", "chapters": ["01_History and Ethical Aspects of Anaesthesia","02_Preoperative Evaluation","03_CNS and CVS Monitoring in Anaesthesia","04_Respiratory Monitoring in Anaesthesia","05_Airway Devices","06_Intubation","07_Breathing Systems","08_Anesthesia Workstation","09_BLS and PALS","10_ACLS","11_Ventilation and O2 Delivery Systems","12_Depolarising Muscle Relaxants","13_Non-Depolarising Muscle Relaxants","14_Inhaled Anaesthetics - Properties, N2O and Halo...","15_Inhaled Anaesthetics - Fluorinated Agents, Iner...","16_Intravenous Anesthesia - Barbiturates, Benzodia...","17_Intravenous Anesthesia - Etomidate, Ketamine an...","18_Local Anaesthetics - General Properties","19_Local Anesthetics - Specific Drugs","20_Regional Anesthesia Techniques","21_Regional Anesthesia Complications and Contrain...","22_Peripheral Nerve Blocks","23_Anaesthetic Implication of Concurrent Diseases","24_Pediatric and Obstetric Anaesthesia","25_Complications of Anaesthesia"] }
};

// --- Initialize all chapter lists ---
function initAll() {
    for (let subject in data) {
        const listEl = document.getElementById(subject + '-list');
        if (listEl) {
            if (data[subject].chapters.length === 0) {
                listEl.innerHTML = '<div class="chapter-item">No chapters extracted yet</div>';
            } else {
                data[subject].chapters.forEach(name => {
                    const item = document.createElement('div');
                    item.className = 'chapter-item';
                    item.innerText = name;
                    item.onclick = () => {
                        window.open(`${data[subject].folder}/${name}.html`, '_blank');
                    };
                    listEl.appendChild(item);
                });
            }
        }
    }
}

// --- Toggle accordion ---
function toggleAcc(el) {
    const wrap = el.parentElement;
    const isActive = wrap.classList.contains('active');
    document.querySelectorAll('.subject-wrapper').forEach(w => w.classList.remove('active'));
    if (!isActive) wrap.classList.add('active');
}

// --- Search-to-subject handler for Marrow ---
function handleSubjectSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectToFind = urlParams.get('subject');

    if (subjectToFind) {
        const wrapperId = subjectToFind + '-wrap';
        const targetWrapper = document.getElementById(wrapperId);

        if (targetWrapper) {
            targetWrapper.classList.add('active');
            targetWrapper.style.borderColor = "var(--primary)";
            targetWrapper.style.boxShadow = "0 0 20px rgba(108, 92, 231, 0.4)";
            targetWrapper.style.transition = "all 0.5s ease";

            setTimeout(() => {
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetWrapper.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }, 300);

            setTimeout(() => {
                targetWrapper.style.boxShadow = "none";
            }, 3000);
        }
    }
}

// Initialize
initAll();
window.addEventListener('DOMContentLoaded', handleSubjectSearch);
