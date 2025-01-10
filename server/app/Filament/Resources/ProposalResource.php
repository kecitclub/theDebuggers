<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProposalResource\Pages;
use App\Models\Proposal;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProposalResource extends Resource
{
    protected static ?string $model = Proposal::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        Select::make('category_id')
                            ->label('Category')
                            ->relationship('category', 'name')
                            ->required(),
                        Select::make('user_id')
                            ->label('User')
                            ->relationship('user', 'name')
                            ->required(),

                        Textarea::make('description')
                            ->label('Description')
                            ->required(),

                        TextInput::make('location')
                            ->label('Location')
                            ->required(),

                        TextInput::make('target_community')
                            ->label('Target Community')
                            ->required(),

                        Textarea::make('expected_impact')
                            ->label('Expected Impact')
                            ->required(),

                        Select::make('urgent')
                            ->label('Is this urgent?')
                            ->options([
                                true => 'Yes',
                                false => 'No',
                            ])
                            ->required(),

                        Textarea::make('why_urgent')
                            ->label('Why is this urgent?')
                            ->nullable()
                            ->visible(fn($get) => $get('urgent')),

                        DatePicker::make('estimated_start_date')
                            ->label('Estimated Start Date')
                            ->required(),

                        DatePicker::make('expected_completion_date')
                            ->label('Expected Completion Date')
                            ->required(),

                        Select::make('status')
                            ->label('Status')
                            ->options([
                                'pending' => 'Pending',
                                'approved' => 'Approved',
                                'rejected' => 'Rejected',
                            ])
                            ->nullable(),

                        Repeater::make('timelines')
                            ->label('Timelines')
                            ->schema([
                                TextInput::make('name')
                                    ->label('Name')
                                    ->required(),

                                DatePicker::make('start_date')
                                    ->label('Start Date')
                                    ->required(),

                                DatePicker::make('end_date')
                                    ->label('End Date')
                                    ->required(),

                                TextInput::make('estimated_cost')
                                    ->label('Estimated Cost')
                                    ->numeric()
                                    ->required(),

                                TextInput::make('status')
                                    ->label('Status')
                                    ->required(),
                            ])
                            ->required(),

                        Repeater::make('documents')
                            ->label('Documents')
                            ->schema([
                                FileUpload::make('file')
                                    ->label('File')
                                    ->required(),
                            ])
                            ->required(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->label('User'),
                Tables\Columns\TextColumn::make('description')
                    ->limit(50),
                Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created At')
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProposals::route('/'),
            'create' => Pages\CreateProposal::route('/create'),
            'edit' => Pages\EditProposal::route('/{record}/edit'),
        ];
    }
}
