import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kinder-Sonnenbrillen Großhandel | Kinderbrillen Hersteller - EyeView',
  description: 'Hersteller von Kinder-Sonnenbrillen im Großhandel. Sichere, flexibel und bunte Brillen für 3-12 Jahre. UV400, BPA-frei, CPSIA-konform. OEM/ODM. MOQ 100 Stk.',
  keywords: 'Kinder Sonnenbrillen Großhandel, Kinderbrillen Hersteller, UV400 Kinderbrillen, sichere Kinderbrillen, CPSIA Brillen',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/produkte/kinder/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids/',
      'de': 'https://eyeviewsunglasses.com/de/produkte/kinder/',
    },
  },
}

const products = [
  {
    name: 'Baby-Sonnenbrillen (0-3 Jahre)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 Stk.',
    description: 'Seien wir ehrlich — Babys kauen auf allem herum. Deshalb bestehen diese Fassungen aus lebensmittelechtem Silikon, dem gleichen Material wie Babyflaschensauger. Man könnte sie buchstäblich in den Mund nehmen (Ihr Baby wird es tun). Komplett BPA-frei, phthalatfrei und weich genug, um nicht zu piksen oder zu zwicken. Das verstellbare Band hält sie an Ort und Stelle, selbst wenn Ihr Kleines entschlossen ist, sie abzuziehen. Was es tun wird. Wiederholt.',
  },
  {
    name: 'Kleinkind-Sonnenbrillen (3-5 Jahre)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 Stk.',
    description: 'Wissen Sie, was mit Kleinkind-Sonnenbrillen passiert? Sie werden draufgesessen, draufgetreten, durchs Zimmer geworfen und im Sandkasten vergraben. Deshalb fertigen wir diese aus TPE — einem flexiblen Material, das sich biegt, verdreht und absolut misshandeln lässt, um dann einfach in seine Form zurückzuspringen. Erhältlich in über 15 Farben, denn offenbar hat jedes 4-Jährige eine sehr bestimmte Meinung zu seiner Lieblingsfarbe. (Es ist meistens Pink. Oder Dinosaurier-Grün.)',
  },
  {
    name: 'Kinder Sport-Sonnenbrillen (6-9 Jahre)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 Stk.',
    description: 'Für das Kind, das immer draußen ist — Fußballtraining, Schwimmunterricht, Fahrradtouren durch die Nachbarschaft. Dies sind verkleinerte Versionen unserer Erwachsenen-Sportfassungen mit flexiblen TR90-Rahmen und umlaufendem Schutz. Polarisierte Option für Strandausflüge und Schneetage verfügbar. Eine Jugendsportliga in Kalifornien bestellte letztes Jahr 800 Paar für ihr Sommerprogramm. Ihr Feedback: „Endlich Sportbrillen, die Kindern wirklich passen."',
  },
  {
    name: 'Mädchen Fashion Cat-Eye (6-10 Jahre)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 Stk.',
    description: 'Mini-Cat-Eyes für Mädchen, die aussehen wollen wie Mama (oder ihre Lieblings-YouTuberin). Glitzerakzente, Pastellfarben, herzförmige Bügeldekorationen — alles, was eine 7-Jährige zum Quietschen bringt: „ICH LIEBE DIE!" Gleiche Sicherheitsstandards wie alle unsere Kinderfassungen, nur mit deutlich mehr Glitzer. Absolute Verkaufsschlager in Kinderboutiquen und Strandresort-Shops.',
  },
  {
    name: 'Jungen Aviator (8-12 Jahre)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 Stk.',
    description: 'Für den Teenager, der sich für „Kinderbrillen" zu cool hält. Diese Aviators sehen erwachsen aus, sind aber für jüngere Gesichter dimensioniert (49-52mm Glasbreite). Leichte Metallfassung mit Federscharnieren, die verschiedene Kopfgrößen beim Wachsen aufnehmen. Stoßfeste Polycarbonat-Gläser für Skateboarden, Radfahren und was auch immer 10-jährige Jungs so anstellen. (Spoiler: Es beinhaltet meist, von Dingen zu springen.)',
  },
  {
    name: 'Kinder Polarisiert Sport',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 Stk.',
    description: 'Für die jungen Athleten, die ihren Sport ernst nehmen. TAC-polarisierte Gläser reduzieren Blendung durch Wasser, Schnee und Asphalt — ein echter Unterschied für Kinder beim Schwimmen, Skifahren oder Angeln mit Papa. Dies sind unsere Premium-Kinderfassungen und die, nach denen Eltern gezielt fragen, wenn sie den besten Schutz wollen, den man kaufen kann. Eine Schwimmschule in Sydney nutzt diese exklusiv für ihren Outdoor-Unterricht.',
  },
]

export default function KinderPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/de" className="hover:text-primary-600">Startseite</Link>
          <span className="mx-2">/</span>
          <Link href="/de/produkte" className="hover:text-primary-600">Produkte</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Kinder-Sonnenbrillen</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kinder-Sonnenbrillen Großhandel
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eltern verstehen keinen Spaß, wenn es um die Augen ihrer Kinder geht. Wir auch nicht.
            Jedes Paar ist BPA-frei, UV400-zertifiziert und erfüllt die CPSIA-, ASTM F963- und
            EN71-Sicherheitsstandards. Flexible Fassungen, die das Kleinkind-Chaos überstehen.
            Echter UV-Schutz — nicht nur getöntes Plastik. Alter 0-12, ab $5.50.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Kinder-Sonnenbrillen Großhandel - Sicherer UV-Schutz für Kinder von 0-12 Jahren"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Was die meisten Eltern nicht wissen</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Kinderaugen lassen deutlich mehr UV-Strahlung durch als Erwachsenenaugen. Deutlich
              mehr. Vor dem 10. Lebensjahr lässt die Augenlinse eines Kindes über 75% der UV-A-
              und 70% der UV-B-Strahlen direkt zur Netzhaut durch. Eine Erwachsenenlinse? Nur
              etwa 10%. Das bedeutet, dass die Augen Ihres Kindes an einem sonnigen Tag etwa 6-7
              Mal mehr UV-Schäden aufnehmen. Und hier wird es beunruhigend — die <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">WHO sagt, dass bis zu 80%</a> der
              lebenslangen UV-Exposition eines Menschen vor dem 18. Lebensjahr stattfinden.
            </p>
            <p>
              Wenn Eltern also diese niedlichen 2-€-Novitäten-Sonnenbrillen aus dem Billigladen
              kaufen? Diese dunklen getönten Gläser könnten die Sache tatsächlich <em>verschlimmern</em>.
              Dunkle Gläser ohne echten UV-Schutz weiten die Pupillen, sodass noch mehr schädliche
              Strahlung eindringt als ganz ohne Sonnenbrille. Das ist ein Problem. Ein echtes.
            </p>
            <p>
              Genau deshalb nehmen wir Kinder-Sonnenbrillen so ernst. Jedes einzelne Paar, das
              wir herstellen, wird im Labor auf UV400-Konformität geprüft — das bedeutet, sie
              blockieren 99,9% der UV-Strahlung bis 400 Nanometer. Wir liefern die Prüfberichte.
              Wir haben die Zertifizierungen. Wenn Eltern ein Paar unserer Kinder-Sonnenbrillen
              in die Hand nehmen, können sie darauf vertrauen, dass die Augen ihres Kindes
              tatsächlich geschützt sind. Nicht nur beschattet. Geschützt.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Kinder-Sonnenbrillen Großhandel" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Die Kinder-Kollektion</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} Großhandel - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>BPA-freie sichere Materialien</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Flexible unzerbrechliche Fassung</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>100% UV400-Schutz</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/de/kontakt" className="btn-primary w-full block text-center">Angebot anfordern</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Certifications */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Zertifizierungen, denen Eltern vertrauen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">Die wichtigste für den US-Markt. Blei unter 100 ppm, null Phthalate. Wenn Sie Kinderprodukte in Amerika verkaufen, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">ist das keine Option — es ist Gesetz</a>. Wir haben es abgedeckt.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">Der US-Spielzeugsicherheitsstandard. Prüft auf mechanische Gefahren (scharfe Kanten, Kleinteile), Entflammbarkeit und giftige Chemikalien. Unsere Fassungen bestehen alle drei Abschnitte.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">Der europäische Spielzeugsicherheitsstandard. Drei Teile zu mechanischer Sicherheit, Entflammbarkeit und Migration toxischer Elemente. Pflicht für den Verkauf in der EU.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE & FDA</h3>
              <p className="text-sm text-gray-600">CE für Europa, FDA für den US-Optikmarkt. Beide bestätigen, dass unsere UV-Schutzangaben echt sind — nicht nur Marketing-Aufkleber auf billigen Fassungen.</p>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Woraus bestehen die? (Eltern fragen immer)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Lebensmittelechtes Silikon (0-3 Jahre)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Gleiches Material wie Babyflaschensauger und Beißringe. Wenn es sicher genug ist,
                in den Mund eines Babys zu kommen — und es wird in den Mund kommen, garantiert —
                dann ist es sicher genug für Sonnenbrillen. Unendlich biegbar, unglaublich weich,
                BPA-frei, phthalatfrei, PVC-frei, latexfrei. Reizt empfindliche Babyhaut nicht.
                Wir haben diese für Eltern entworfen, die sich um alles Sorgen machen. (Wir
                verstehen das. Wir sind auch Eltern.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 TPE Flexible Fassungen (3-8 Jahre)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TPE (Thermoplastisches Elastomer) ist das Material-Äquivalent von &quot;Versuch
                mich zu brechen, ich trau mich.&quot; Biegen. Verdrehen. Draufsetzen. Aus einem
                fahrenden Kinderwagen werfen. Es springt einfach zurück. Wir haben diese getestet:
                Stürze aus 1,5 Metern Höhe (ungefähr Tischhöhe) und über 500 Biegezyklen. Denn
                Kleinkinder und kleine Kinder werden Wege finden, sie zu strapazieren, die kein
                Ingenieur je vorhergesehen hat.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 TR90 Nylon (8-12 Jahre)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Für die älteren Kinder, die Sport treiben, Fahrrad fahren und generell mit allem,
                was sie besitzen, grob umgehen. TR90 ist 35% leichter als normales Plastik, biegt
                sich ohne zu brechen und verträgt Temperaturen von -40°C bis 120°C (also ja, es
                überlebt auch im heißen Auto). Zudem hypoallergen — keine juckenden roten
                Druckstellen hinter den Ohren nach einem langen Tag draußen.
              </p>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Größentabelle nach Alter</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Alter</th>
                  <th className="p-4 text-left font-semibold">Glasbreite</th>
                  <th className="p-4 text-left font-semibold">Steg</th>
                  <th className="p-4 text-left font-semibold">Bügel</th>
                  <th className="p-4 text-left font-semibold">Material</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-semibold">Baby (0-2)</td><td className="p-4 text-gray-600">36-40mm</td><td className="p-4 text-gray-600">10-12mm</td><td className="p-4 text-gray-600">Band</td><td className="p-4 text-gray-600">Lebensmittelechtes Silikon</td></tr>
                <tr><td className="p-4 font-semibold">Kleinkind (2-4)</td><td className="p-4 text-gray-600">40-44mm</td><td className="p-4 text-gray-600">12-14mm</td><td className="p-4 text-gray-600">105-115mm</td><td className="p-4 text-gray-600">Silikon / TPE</td></tr>
                <tr><td className="p-4 font-semibold">Kinder (4-7)</td><td className="p-4 text-gray-600">44-48mm</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">115-125mm</td><td className="p-4 text-gray-600">TPE / TPEE</td></tr>
                <tr><td className="p-4 font-semibold">Junior (7-10)</td><td className="p-4 text-gray-600">48-52mm</td><td className="p-4 text-gray-600">15-17mm</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">TR90 / PC</td></tr>
                <tr><td className="p-4 font-semibold">Jugend (10-12)</td><td className="p-4 text-gray-600">52-56mm</td><td className="p-4 text-gray-600">16-18mm</td><td className="p-4 text-gray-600">130-140mm</td><td className="p-4 text-gray-600">TR90 / Acetat</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Gebaut für echte Kinder, nicht für vorsichtige Kinder</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Null Schadstoffe" description="BPA-frei. Phthalatfrei. PVC-frei. Bleifrei. Wir testen auf alles, worüber Eltern sich Sorgen machen." />
            <FeatureCard icon="🔄" title="Versuch sie zu brechen" description="Biegen. Verdrehen. Drauftreten. Sie springen zurück. Wir fordern Ihr Kleinkind heraus, sie zu zerstören." />
            <FeatureCard icon="☀️" title="Echtes UV400" description="Laborgeprüft, nicht nur auf dem Etikett behauptet. Wir liefern Prüfberichte. Die Augen Ihrer Kunden-Kinder sind wirklich geschützt." />
            <FeatureCard icon="💪" title="Splitterfreie Gläser" description="Polycarbonat-Gläser, die bei Aufprall nicht splittern. Denn Kinder fallen. Oft." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Verwandte Produkte</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/de/produkte/sport" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Sport-Sonnenbrillen</h3>
              <p className="text-sm text-gray-600">Erwachsenen-Sportfassungen — Eltern und Kinder können zusammenpassen!</p>
            </Link>
            <Link href="/de/produkte/polarisiert" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarisierte Optionen</h3>
              <p className="text-sm text-gray-600">Premium-Blendschutz für Strand und Schnee</p>
            </Link>
            <Link href="/de/produkte" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Kinder-Blaulichtbrillen</h3>
              <p className="text-sm text-gray-600">Bildschirmschutz für Tablets und Online-Schule</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Elternfragen (Die bekommen wir täglich)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Ab welchem Alter brauchen Kinder Sonnenbrillen?"
              answer="Die Amerikanische Akademie für Augenheilkunde sagt ab 6 Monaten. Davor Babys im Schatten halten mit Hüten und Kinderwagenverdecken. Aber sobald sie 6 Monate alt sind und Zeit im Freien verbringen, brauchen ihre Augen UV-Schutz. Wir wissen, das klingt früh — aber denken Sie daran, dass ihre kleinen Augen 6-7 Mal mehr UV durchlassen als Ihre. Je früher Sie anfangen, desto besser."
            />
            <FaqItem
              question="Schützen die wirklich oder sind sie nur hübsch?"
              answer="Beides! Aber Schutz kommt zuerst. Jedes Paar blockiert 99,9% der UV-Strahlung bis 400 Nanometer — verifiziert durch unabhängige Laborprüfung. Wir schicken Ihnen die Prüfberichte, wenn Sie möchten. Vorsicht vor billigen Kinder-Sonnenbrillen, die nur dunkel getöntes Plastik ohne UV-Filter sind. Die machen es tatsächlich schlimmer, indem sie die Pupillen weiten und mehr schädliche Strahlung einlassen. Unsere Brillen sind süß UND sicher."
            />
            <FaqItem
              question="Mein Kind zerstört alles. Überleben die das?"
              answer="Genau dafür haben wir sie entworfen. Die Baby-Silikonfassungen? Unendlich biegbar. Die Kleinkind-TPE-Fassungen? Wir haben sie getestet: über 500 Biegezyklen und Stürze aus 1,5 Metern Höhe überstanden. Die TR90-Fassungen für ältere Kinder? Biegen Sie sie 90 Grad — sie springen sofort zurück. Wir können nicht versprechen, dass sie 100% unzerstörbar sind (Kinder sind kreativ), aber es sind die robustesten Fassungen, die wir herstellen können."
            />
            <FaqItem
              question="Welche Zertifizierungen haben die? Ich brauche das für meinen Laden."
              answer="Alles, was Sie brauchen: CPSIA (Pflicht für US-Kinderprodukte — Blei unter 100 ppm, null Phthalate), ASTM F963 (US-Spielzeugsicherheit), EN71 (EU-Spielzeugsicherheit), CE-Kennzeichnung und FDA-Optikstandards. Wir liefern vollständige Zertifizierungsdokumente mit jeder Großbestellung. Wenn der Zoll Fragen stellt, haben Sie die Unterlagen parat."
            />
            <FaqItem
              question="Kann ich mit unserer Marke oder Comicfiguren personalisieren?"
              answer="Absolut. Individuelle Farben (über 20 Standard plus Pantone-Abgleich), Figurendesigns auf den Bügeln, Ihr Markenlogo, glitzerinfundierte Fassungen, im Dunkeln leuchtende Bügel — was immer Sie wollen. MOQ für individuelle Designs beträgt 300 Stück pro Stil. Wir haben lizenzierte Figuren-Kollaborationen, Schulmaskottchen-Designs und sogar passende Eltern-Kind-Sets gemacht. Schicken Sie uns einfach Ihre Idee und wir erstellen einen Entwurf."
            />
            <FaqItem
              question="Haben die Baby-Sonnenbrillen Bänder?"
              answer="Ja — abnehmbare, verstellbare Neopren-Bänder, verstellbar von 14 bis 18 cm. Sanft zur Babyhaut, sicher genug, um auf einem zappelnden Baby zu halten. Für Kleinkind-Fassungen (3-5 Jahre) bieten wir optionale Bandaufsätze an, die sich an- und abclipsen lassen. Die meisten Eltern nutzen das Band bis etwa 3-4 Jahre und wechseln dann zu normalen Bügeln, wenn das Kind alt genug ist, sie aufzubehalten."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Kleine Augen schützen. Elternvertrauen aufbauen.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Kinderboutiquen, Spielzeugläden, Kinderarztpraxen, Ferienlager, Strandresorts,
            Schulbedarfsgeschäfte — unsere Kinder-Sonnenbrillen verkaufen sich überall dort,
            wo Eltern einkaufen. Vollständige Sicherheitsdokumentation inklusive. Kostenlose
            Muster verfügbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/de/kontakt" className="btn-primary">Kinder-Kollektion Katalog anfordern</Link>
            <Link href="/de/produkte" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Alle Produkte ansehen</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://eyeviewglasses.com/de" },
          { "@type": "ListItem", "position": 2, "name": "Produkte", "item": "https://eyeviewglasses.com/de/produkte" },
          { "@type": "ListItem", "position": 3, "name": "Kinder-Sonnenbrillen", "item": "https://eyeviewglasses.com/de/produkte/kinder" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Ab welchem Alter brauchen Kinder Sonnenbrillen?",
            "acceptedAnswer": { "@type": "Answer", "text": "Die Amerikanische Akademie für Augenheilkunde empfiehlt UV-schützende Sonnenbrillen ab 6 Monaten. Kinderaugen lassen 6-7 Mal mehr UV-Strahlung durch als Erwachsenenaugen." }
          },
          {
            "@type": "Question",
            "name": "Schützen Kinder-Sonnenbrillen wirklich oder sind sie nur Dekoration?",
            "acceptedAnswer": { "@type": "Answer", "text": "Jedes Paar blockiert 99,9% der UV-Strahlung bis 400nm, verifiziert durch unabhängige Laborprüfung. Wir liefern Prüfberichte. Vorsicht vor billigen Novelty-Sonnenbrillen ohne echten UV-Schutz." }
          },
          {
            "@type": "Question",
            "name": "Überleben diese Sonnenbrillen mein Kind?",
            "acceptedAnswer": { "@type": "Answer", "text": "Dafür entworfen. Baby-Silikonfassungen sind unendlich biegbar. Kleinkind-TPE-Fassungen überstehen über 500 Biegezyklen und 1,5m Stürze. TR90-Fassungen für ältere Kinder lassen sich 90° biegen, ohne zu brechen." }
          },
          {
            "@type": "Question",
            "name": "Welche Sicherheitszertifizierungen haben diese Kinder-Sonnenbrillen?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (Blei unter 100 ppm, null Phthalate), ASTM F963, EN71, CE-Kennzeichnung und FDA-Optikstandards. Vollständige Zertifizierungsdokumente mit jeder Großbestellung." }
          },
          {
            "@type": "Question",
            "name": "Kann ich Kinder-Sonnenbrillen mit Markenlogos oder Figuren individualisieren?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ja — individuelle Farben, Figurendesigns, Markenlogos, Glitterfassungen, leuchtende Bügel. MOQ für individuelle Designs beträgt 300 Stück pro Stil." }
          },
          {
            "@type": "Question",
            "name": "Haben Baby-Sonnenbrillen Kopfbänder?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ja — abnehmbare verstellbare Neopren-Bänder (14-18cm). Kleinkind-Fassungen haben optionale Clip-on-Bänder. Die meisten Eltern nutzen Bänder bis zum Alter von 3-4 Jahren." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
