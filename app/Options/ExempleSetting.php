<?php

namespace App\Options;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Options as Field;

class ExempleSetting extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Exemple Setting';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Exemple Setting | Options';

    /**
     * The option page field group.
     */
    public function fields(): array
    {
        $fields = Builder::make('exemple_setting');

        $fields
            ->addRepeater('items')
                ->addText('item')
            ->endRepeater();

        return $fields->build();
    }
}
