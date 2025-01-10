<div class="filament-icon-picker-icon-column px-4 py-3">
    @if (!$getState())
        <span class="text-gray-400">--</span>
    @else
        <x-icon class="h-6" name="{{ $getState() }}" />
    @endif
</div>
